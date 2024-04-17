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
			throw new BadRequestException([
				['Пользователя с такой почтой не существует'],
			]);
		}

		if (!bcrypt.compareSync(password, user.password)) {
			throw new BadRequestException(['Неверный пароль']);
		}

		return user;
	}

	async validateUserReg(
		mail: string,
		password: string,
		password2: string,
		nick: string
	) {
		const isExist = await this.userService.findOne(mail);

		if (isExist)
			throw new BadRequestException([
				['Пользователь с такой почтой уже существет'],
			]);

		if (password != password2)
			throw new BadRequestException(['Пароли не совпадают']);

		return true;
	}

	async login(user: IUser) {
		const { id, mail } = user;

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
