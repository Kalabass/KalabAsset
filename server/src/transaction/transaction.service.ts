import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/category.service';
import { WalletService } from 'src/wallet/wallet.service';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
	constructor(
		@InjectRepository(Transaction)
		private readonly transactionRepository: Repository<Transaction>,
		private readonly walletService: WalletService,
		private readonly categoryService: CategoryService
	) {}

	async create(createTransactionDto: CreateTransactionDto, id: number) {
		const newTransaction = {
			name: createTransactionDto.name,
			amount: createTransactionDto.amount,
			type: createTransactionDto.type,
			user: { id },
			category: { id: +createTransactionDto.category },
			wallet: { id: +createTransactionDto.wallet },
		};

		const wallet = await this.walletService.findOne(
			+createTransactionDto.wallet
		);

		if (!wallet) throw new BadRequestException('Кошелёк не найден');
		console.log();
		wallet.amount =
			createTransactionDto.type === 'expense'
				? wallet.amount - createTransactionDto.amount
				: wallet.amount + createTransactionDto.amount;

		await this.walletService.update(wallet.id, wallet);

		if (!newTransaction)
			throw new BadRequestException('Что-то пошлло не так...');
		console.log(newTransaction);
		return await this.transactionRepository.save(newTransaction);
	}

	async findAll(id: number) {
		const transactions = await this.transactionRepository.find({
			where: {
				user: { id },
			},
			relations: {
				category: true,
				wallet: true,
			},
			order: {
				createdAt: 'DESC',
			},
		});

		return transactions;
	}

	async findOne(id: number) {
		const transaction = await this.transactionRepository.findOne({
			where: {
				id,
			},
			relations: {
				user: true,
				category: true,
			},
		});

		if (!transaction) throw new NotFoundException('Transaction Not Found');
		return transaction;
	}

	async update(id: number, updateTransactionDto: UpdateTransactionDto) {
		const transaction = await this.transactionRepository.findOne({
			where: { id },
		});

		if (!transaction) throw new NotFoundException('Transaction not found');

		return this.transactionRepository.update(id, updateTransactionDto);
	}

	async remove(id: number) {
		const transaction = await this.transactionRepository.findOne({
			where: { id },
		});

		if (!transaction) throw new NotFoundException('Transaction not found');

		return await this.transactionRepository.delete(id);
	}

	async findAllWithPagination(id: number, page: number, limit: number) {
		const transactions = await this.transactionRepository.find({
			where: {
				user: { id },
			},
			relations: {
				user: true,
				category: true,
			},
			order: {
				createdAt: 'DESC',
			},
			take: limit,
			skip: (page - 1) * limit,
		});

		return transactions;
	}

	async findAllCategoriesSum(id: number, type: string) {
		const transactions = await this.transactionRepository
			.createQueryBuilder('transactions')
			.where('transactions.userId = :id', { id })
			.where('transactions.type = :type', { type })
			.innerJoin('transactions.category', 'category')
			.select('category.title')
			.addSelect('SUM(transactions.amount)', 'sum')
			.groupBy('category.title')
			.getRawMany();

		return transactions;
	}

	async findAllByTypeSum(id: number) {
		const transactions = await this.transactionRepository
			.createQueryBuilder('transactions')
			.where('transactions.userId = :id', { id })
			.select('transactions.type')
			.addSelect('SUM(transactions.amount)', 'sum')
			.groupBy('transactions.type')
			.getRawMany();

		return transactions;
	}
}
