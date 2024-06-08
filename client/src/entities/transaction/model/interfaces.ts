import { ICategory } from '../../category/model/interfaces';
import { IWallet } from '../../wallet/model/interfaces';

export interface ITransaction {
	id?: number;
	type: string;
	amount: number;
	name: string;
	category: ICategory;
	wallet: IWallet;
	createdAt: Date;
	updatedAt: Date;
}

export interface ITransactionAdd {
	id?: number;
	type: string;
	amount: number;
	name: string;
	category: number;
	wallet: number;
}

export interface ITransactionByCategory {
	category_title: string;
	sum: number;
}

export interface ITransactionByType {
	transactions_type: string;
	sum: number;
}
