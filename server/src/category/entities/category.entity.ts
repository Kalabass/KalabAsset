import { Transaction } from 'src/transaction/entities/transaction.entity';
import { User } from 'src/user/entities/user.entity';
import {
	Column,
	Entity,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('categories')
export class Category {
	@PrimaryGeneratedColumn()
	id: number;
	@Column({ nullable: true })
	title: string;

	@ManyToMany(() => User, user => user.categories)
	users: User[];

	@OneToMany(() => Transaction, transaction => transaction.category)
	transactions: Transaction[];
}
