import { RefreshToken } from 'src/refresh_token/entities/refresh_token.entity';
import { Target } from 'src/target/entities/target.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import {
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nick: string;

	@Column()
	mail: string;

	@Column()
	password: string;

	@Column({ default: false })
	isActivated: boolean;

	@Column({ nullable: true })
	activationLink: string;

	@OneToMany(() => Wallet, wallet => wallet.user)
	wallets: Wallet[];

	@OneToMany(() => Transaction, transaction => transaction.user)
	transactions: Transaction[];

	@OneToMany(() => Target, target => target.user)
	targets: Target[];

	@OneToOne(() => RefreshToken)
	@JoinColumn()
	refresh_token: RefreshToken;
}
