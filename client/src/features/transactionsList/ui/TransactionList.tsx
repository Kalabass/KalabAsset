import { Transaction, useTransactions } from '@/entities/transaction';
import { Wrapper } from './components';

export const TransactionList: React.FC = () => {
	const transactions = useTransactions();
	return (
		<Wrapper>
			{transactions.data?.map(transaction => (
				<Transaction key={transaction.id} {...transaction} />
			))}
		</Wrapper>
	);
};
