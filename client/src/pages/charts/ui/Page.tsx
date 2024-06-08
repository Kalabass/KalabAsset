import { ITransaction } from '@/entities/transaction';
import { useTransactionsByCategory } from '@/entities/transaction/helpers/useTransactionsByCategory';
import { useTransactionsByType } from '@/entities/transaction/helpers/useTransactionsByType';
import { ITransactionByType } from '@/entities/transaction/model/interfaces';
import { Pie } from '@ant-design/plots';
import { useEffect } from 'react';
interface ITransactionPuk extends Pick<ITransaction, 'type' | 'amount'> {}
interface IConfig {
	data: ITransactionByType[] | undefined;
}
export const Page: React.FC = () => {
	const expenseData = useTransactionsByCategory('expense');
	const incomeData = useTransactionsByCategory('income');
	const typeData = useTransactionsByType();

	useEffect(() => {}, []);
	return !typeData.isLoading && !typeData.isError && typeData.data ? (
		<Pie
			angleField={'amount'}
			colorField={'type'}
			innerRadius={0.5}
			data={typeData.data}
		/>
	) : (
		<div>penis</div>
	);
};
