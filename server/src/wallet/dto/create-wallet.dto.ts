import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateWalletDto {
	@IsNotEmpty()
	name: string;
	@IsOptional()
	amount?: number;
}
