import { useQuery } from '@tanstack/react-query';
import { transactionService } from '../api/api';

export function useTransactions() {
	return useQuery({
		queryKey: ['transactions'],
		queryFn: () => transactionService.getAll(),
		select: ({ data }) => data,
	});
}
