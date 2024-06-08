import { useMutation, useQueryClient } from '@tanstack/react-query';
import { transactionService } from '../api/api';
import { ITransactionAdd } from '../model/interfaces';

export const useAddTransactionMutation = (transaction: ITransactionAdd) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: () => transactionService.addTransaction(transaction),
		mutationKey: ['transaction', 'add'],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['transactions'] });
			queryClient.invalidateQueries({ queryKey: ['wallets'] });
		},
		onError: (error: Error) => {
			console.error(error.response.data.message);
		},
	});
};
