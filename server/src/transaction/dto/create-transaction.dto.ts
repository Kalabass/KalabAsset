import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';

export class CreateTransactionDto {
	@IsNotEmpty()
	name: string;

	@IsNotEmpty()
	@IsNumber()
	amount: number;

	@IsString()
	@MinLength(6)
	type: 'expense' | 'income';

	@IsNotEmpty()
	category: Category;

	@IsNotEmpty()
	wallet: Wallet;
}
