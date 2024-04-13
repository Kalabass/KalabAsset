import { IsNotEmpty } from 'class-validator';

export class RegUserDto {
	@IsNotEmpty()
	nick: string;
	@IsNotEmpty()
	mail: string;
	@IsNotEmpty()
	password: string;
	@IsNotEmpty()
	password2: string;
}
