import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { IRegistrationData } from 'src/interfaces/interfaces';
import { AuthService } from '../auth.service';
@Injectable()
export class RegistrationGuard implements CanActivate {
	constructor(private readonly authService: AuthService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const data: IRegistrationData = context.switchToHttp().getRequest().body;
		const { mail, nick, password, password2 } = data;

		return await this.authService.validateUserReg(
			mail,
			password,
			password2,
			nick
		);
	}
}
