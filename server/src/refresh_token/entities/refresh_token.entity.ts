import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity('tokens')
export class RefreshToken {
	@PrimaryColumn()
	id: number;

	@Column()
	refresh_token: string;

	@OneToOne(() => User, user => user.refresh_token)
	user: User;
}
