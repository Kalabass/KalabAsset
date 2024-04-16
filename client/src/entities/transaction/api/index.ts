import instance from '../../../shared/api/axios.api';
import { ITransaction, ITransactionAdd } from '../model';

class TransactionService {
	async getAll() {
		return await instance.get<ITransaction[]>('transaction');
	}

	async getOne(id: number) {
		return instance.get<ITransaction>(`transaction/${id}`);
	}

	async addTransaction(transaction: ITransactionAdd) {
		return instance.post<ITransaction>('transaction', transaction);
	}

	async deleteTransaction(id: number) {
		return instance.delete<ITransaction>(`transaction/${id}`);
	}

	async updateTransaction(id: number, newTransaction: ITransactionAdd) {
		return instance.patch<ITransaction>(`transaction/${id}`, newTransaction);
	}
}

export const transactionService = new TransactionService();
