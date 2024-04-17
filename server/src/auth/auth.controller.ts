import {
	Body,
	Controller,
	Get,
	Post,
	Request,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegUserDto } from './dto/reg-user.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RegistrationGuard } from './guards/local-reg.guard';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	@UsePipes(ValidationPipe)
	@UseGuards(LocalAuthGuard)
	async login(@Request() req) {
		return this.authService.login(req.user);
	}

	@Post('reg')
	@UsePipes(ValidationPipe)
	@UseGuards(RegistrationGuard)
	async register(@Body() regUserDto: RegUserDto) {
		return this.authService.register(regUserDto);
	}

	@Get('profile')
	@UseGuards(JwtAuthGuard)
	getProfile(@Request() req) {
		return req.user;
	}

	@Post('logout')
	async logOut() {
		return 'logout';
	}
}
