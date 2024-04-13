import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RefreshToken } from './entities/refresh_token.entity';

@Injectable()
export class RefreshTokenService {
	constructor(
		@InjectRepository(RefreshToken)
		private readonly refreshTokenRepository: Repository<RefreshToken>,
		private readonly jwtService: JwtService
	) {}

	async generateRefreshToken(payload: { id: number; mail: string }) {
		const { id } = payload;

		const refreshToken = this.jwtService.sign(payload);

		const token = await this.refreshTokenRepository.findOne({
			where: {
				user: {
					id,
				},
			},
		});

		if (!token) {
			await this.refreshTokenRepository.save({
				refresh_token: refreshToken,
				user: {
					id,
				},
			});
		} else {
			await this.refreshTokenRepository.update(token, {
				refresh_token: refreshToken,
			});
		}

		return refreshToken;
	}
}
