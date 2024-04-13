import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefreshToken } from './entities/refresh_token.entity';
import { RefreshTokenController } from './refresh_token.controller';
import { RefreshTokenService } from './refresh_token.service';

@Module({
	imports: [
		TypeOrmModule.forFeature([RefreshToken]),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				secret: configService.get('JWT_REFRESH_SECRET'),
				signOptions: { expiresIn: '14d' },
			}),
			inject: [ConfigService],
		}),
	],
	controllers: [RefreshTokenController],
	providers: [RefreshTokenService],
	exports: [RefreshTokenService],
})
export class RefreshTokenModule {}
