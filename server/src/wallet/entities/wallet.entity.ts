import { Transaction } from 'src/transaction/entities/transaction.entity';
import { User } from 'src/user/entities/user.entity';
import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('wallets')
export class Wallet {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	amount: number;

	@ManyToOne(() => User, user => user.wallets)
	user: User;

	@OneToMany(() => Transaction, transaction => transaction.wallet)
	transaction: Transaction;
}
