import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AccessTokenService {
	constructor(private readonly jwtService: JwtService) {}

	generateAccessToken(payload: { id: number; mail: string }) {
		return this.jwtService.sign(payload);
	}
}
