import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletService {
	constructor(
		@InjectRepository(Wallet)
		private readonly walletRepository: Repository<Wallet>
	) {}

	async create(createWalletDto: CreateWalletDto, id: number) {
		const newWallet = this.walletRepository.create({
			name: createWalletDto.name,
			amount: createWalletDto.amount,
			user: { id },
		});

		if (!newWallet) throw new BadRequestException('Something went wrong');

		return await this.walletRepository.save(newWallet);
	}

	async findAll(id: number) {
		const wallets = await this.walletRepository.find({
			where: {
				user: { id },
			},
			order: {
				id: 'ASC',
			},
		});

		return wallets;
	}

	async findOne(id: number) {
		const wallet = await this.walletRepository.findOne({
			where: {
				id,
			},
		});

		if (!wallet) throw new NotFoundException('Wallet not found');
		return wallet;
	}

	async update(id: number, updateWalletDto: UpdateWalletDto) {
		const wallet = await this.walletRepository.findOne({
			where: {
				id,
			},
		});

		if (!wallet) throw new NotFoundException('Wallet not found');

		return await this.walletRepository.update(id, updateWalletDto);
	}

	async remove(id: number) {
		const wallet = await this.walletRepository.findOne({
			where: {
				id,
			},
		});

		if (!wallet) throw new NotFoundException('Wallet not found');

		return this.walletRepository.delete(id);
	}
}
