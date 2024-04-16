import { Transaction, transactionService } from '@/entities/transaction';
import { useQuery } from '@tanstack/react-query';

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
