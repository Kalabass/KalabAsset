import { useQuery } from '@tanstack/react-query';
import { transactionService } from '../api/api';

export function useTransactionsByType() {
	return useQuery({
		queryKey: ['transactions', 'type'],
		queryFn: () => transactionService.getAllByType(),
		select: ({ data }) => data,
	});
}
