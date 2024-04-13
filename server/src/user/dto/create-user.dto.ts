import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
	@IsEmail()
	mail: string;

	@IsString()
	nick: string;

	@MinLength(6, { message: 'password should contain mor then 6 symbols' })
	password: string;
}
