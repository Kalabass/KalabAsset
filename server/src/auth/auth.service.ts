import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IUser } from 'src/interfaces/interfaces';
import { UserService } from 'src/user/user.service';
import { RegUserDto } from './dto/reg-user.dto';
@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService
		// private readonly accessTokenService: AccessTokenService,
		// private readonly refreshTokenService: RefreshTokenService
	) {}

	async validateUserLogin(mail: string, password: string) {
		const user = await this.userService.findOne(mail);

		if (!user) {
			throw new BadRequestException('No user with given email');
		}

		if (!bcrypt.compareSync(password, user.password)) {
			throw new BadRequestException('Wrong password');
		}

		return user;
	}

	async validateUserReg(
		mail: string,
		password: string,
		password2: string,
		nick: string
	) {
		console.log('hz');
		const isExist = await this.userService.findOne(mail);

		if (isExist)
			throw new BadRequestException('User with this email already exists');

		if (password != password2)
			throw new BadRequestException('Given password do not match ');

		return true;
	}

	async login(user: IUser) {
		const { id, mail } = user;

		// const refreshToken = this.refreshTokenService.generateRefreshToken({
		// 	id,
		// 	mail,
		// });
		// const accessToken = this.accessTokenService.generateAccessToken({
		// 	id,
		// 	mail,
		// });
		const refreshToken = '11';
		const accessToken = '11';

		return {
			id,
			mail,
			token: await this.jwtService.sign({ id: user.id, mail: user.mail }),
		};
	}

	async register(regUserDto: RegUserDto) {
		const { mail, password, nick } = regUserDto;

		const newUser = await this.userService.create({
			nick,
			mail,
			password,
		});

		return {
			id: newUser.newUser.id,
			mail: newUser.newUser.mail,
			token: await this.jwtService.sign({
				id: newUser.newUser.id,
				mail: newUser.newUser.mail,
			}),
		};
	}
}
