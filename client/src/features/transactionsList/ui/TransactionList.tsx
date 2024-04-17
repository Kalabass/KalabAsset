import { Transaction, transactionService } from '@/entities/transaction';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin: 10px;
`;

export const TransactionList: React.FC = () => {
	const transactions = useQuery({
		queryKey: ['transactions'],
		queryFn: () => transactionService.getAll(),
		select: ({ data }) => data,
	});
	console.log(transactions.data);
	return (
		<Wrapper>
			{transactions.data?.map(transaction => (
				<Transaction key={transaction.id} {...transaction} />
			))}
		</Wrapper>
	);
};
