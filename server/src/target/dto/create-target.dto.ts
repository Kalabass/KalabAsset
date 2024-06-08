import { IsNumber } from 'class-validator';

export class CreateTargetDto {
	title: string;
	comment: string;
	@IsNumber()
	amount: number;

	dateTo: Date;
}
