import { IsNotEmpty } from 'class-validator';

export class RegUserDto {
	@IsNotEmpty({ message: 'Поле имя не должно быть пустым' })
	nick: string;
	@IsNotEmpty({ message: 'Поле почта не должно быть пустым' })
	mail: string;
	@IsNotEmpty({ message: 'Поле пароль не должно быть пустым' })
	password: string;
	@IsNotEmpty({ message: 'Поле подтвержждение пароля не должно быть пустым' })
	password2: string;
}
