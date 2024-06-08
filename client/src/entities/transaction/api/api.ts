import instance from '../../../shared/instances/axios.api';
import {
	ITransaction,
	ITransactionAdd,
	ITransactionByCategory,
	ITransactionByType,
} from '../model/interfaces';

class TransactionService {
	async getAll() {
		return await instance.get<ITransaction[]>('transaction');
	}

	async getAllByCategory(type: string) {
		return await instance.get<ITransactionByCategory[]>(
			`transaction/categories?type=${type}`
		);
	}

	async getAllByType() {
		return await instance.get<ITransactionByType[]>('transaction/type');
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
