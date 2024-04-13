import { useQuery } from '@tanstack/react-query';
import { walletService } from '../../../entities/wallet/api';

export const useWallets = () => {
	return useQuery({
		queryKey: ['wallets'],
		queryFn: () => walletService.getAll(),
		select: ({ data }) => data,
	});
};
