import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { TransactionService } from 'src/transaction/transaction.service';
@Injectable()
export class TransactionAuthorGuard implements CanActivate {
	constructor(private readonly transactionService: TransactionService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const { id } = request.params;

		let entity = await this.transactionService.findOne(id);

		const user = request.user;

		if (entity && user && entity.user.id === user.id) return true;

		return false;
	}
}
