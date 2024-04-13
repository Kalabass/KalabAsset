import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenModule } from './access_token/access_token.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { MailModule } from './mail/mail.module';
import { RefreshTokenModule } from './refresh_token/refresh_token.module';
import { TransactionModule } from './transaction/transaction.module';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),

		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get('TYPEORM_HOST'),
				port: configService.get('TYPEORM_PORT'),
				username: configService.get('TYPEORM_USERNAME'),
				password: configService.get('TYPEORM_PASSWORD'),
				database: configService.get('TYPEORM_DATABASE'),
				synchronize: true,
				logging: true,
				entities: [__dirname + '/**/*.entity{.js, .ts}'],
				migrations: [],
				subscribers: [],
			}),
			inject: [ConfigService],
		}),
		RefreshTokenModule,
		AccessTokenModule,
		UserModule,
		AuthModule,
		WalletModule,
		TransactionModule,
		CategoryModule,
		MailModule,
		ConfigModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
