import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { WalletModule } from 'src/wallet/wallet.module';
import { WalletService } from 'src/wallet/wallet.service';
import { Transaction } from './entities/transaction.entity';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

@Module({
	imports: [WalletModule, TypeOrmModule.forFeature([Transaction, Wallet])],
	controllers: [TransactionController],
	providers: [TransactionService, WalletService],
})
export class TransactionModule {}
