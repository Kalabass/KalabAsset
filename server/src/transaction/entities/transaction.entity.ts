import { Category } from 'src/category/entities/category.entity';
import { User } from 'src/user/entities/user.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('transactions')
export class Transaction {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	name: string;

	@Column()
	type: string;

	@Column()
	amount: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(() => User, user => user.transactions)
	user: User;

	@ManyToOne(() => Category, category => category.transactions)
	category: Category;

	@ManyToOne(() => Wallet, wallet => wallet.transaction)
	@JoinColumn()
	wallet: Wallet;
}
