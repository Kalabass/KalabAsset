import { useQuery } from '@tanstack/react-query';
import { Transaction } from '../../../entities/transaction';
import { transactionService } from '../../../entities/transaction/api';

export const TransactionList: React.FC = () => {
	const transactions = useQuery({
		queryKey: ['transactions'],
		queryFn: () => transactionService.getAll(),
		select: ({ data }) => data,
	});
	console.log(transactions.data);
	return (
		<>
			{transactions.data?.map(transaction => (
				<Transaction key={transaction.id} {...transaction} />
			))}
		</>
	);
};
