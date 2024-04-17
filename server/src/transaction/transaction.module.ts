import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from 'src/category/category.module';
import { CategoryService } from 'src/category/category.service';
import { Category } from 'src/category/entities/category.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { WalletModule } from 'src/wallet/wallet.module';
import { WalletService } from 'src/wallet/wallet.service';
import { Transaction } from './entities/transaction.entity';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

@Module({
	imports: [
		WalletModule,
		CategoryModule,
		TypeOrmModule.forFeature([Transaction, Wallet, Category]),
	],
	controllers: [TransactionController],
	providers: [TransactionService, WalletService, CategoryService],
})
export class TransactionModule {}
