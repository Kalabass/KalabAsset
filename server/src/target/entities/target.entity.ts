import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('targets')
export class Target {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	amount: number;

	@Column({ default: 0 })
	currentAmount: number;

	@Column()
	title: string;

	@Column({ nullable: false, default: '' })
	comment: string;

	@Column({ nullable: true, default: null })
	dateTo: Date;

	@Column({ default: false })
	isDone: Boolean;
	@Column({ default: true })
	isCurrent: Boolean;

	@ManyToOne(() => User, user => user.targets)
	user: User;
}
