import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenController } from './access_token.controller';
import { AccessTokenService } from './access_token.service';

@Module({
	imports: [
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				secret: configService.get('JWT_ACCESS_SECRET'),
				signOptions: { expiresIn: '1h' },
			}),
			inject: [ConfigService],
		}),
	],
	controllers: [AccessTokenController],
	providers: [AccessTokenService],
	exports: [AccessTokenService],
})
export class AccessTokenModule {}
