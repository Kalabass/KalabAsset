import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>
		// private readonly refreshTokenService: RefreshTokenService,
		// private readonly accessTokenService: AccessTokenService
	) {}

	async create(createUserDto: CreateUserDto) {
		const activationLink = '11';

		const newUser = await this.userRepository.save({
			mail: createUserDto.mail,
			nick: createUserDto.nick,
			password: await bcrypt.hashSync(createUserDto.password, 6),
			activationLink: activationLink,
		});

		return { newUser };
	}

	async findAll() {
		return this.userRepository.find({
			relations: {},
		});
	}

	async findOne(mail: string) {
		return await this.userRepository.findOne({
			where: { mail },
		});
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}
}
