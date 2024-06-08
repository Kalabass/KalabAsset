import { useQuery } from '@tanstack/react-query';
import { transactionService } from '../api/api';

export function useTransactionsByCategory(type: string) {
	return useQuery({
		queryKey: ['transactions', 'categories'],
		queryFn: () => transactionService.getAllByCategory(type),
		select: ({ data }) => data,
	});
}
