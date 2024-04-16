import { Transaction } from 'src/transaction/entities/transaction.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Category {
	@PrimaryGeneratedColumn()
	id: number;
	@Column({ nullable: true })
	title: string;

	@OneToMany(() => Transaction, transaction => transaction.category)
	transactions: Transaction[];
}
