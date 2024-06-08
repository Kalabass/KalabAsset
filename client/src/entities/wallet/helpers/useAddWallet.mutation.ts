import { useAddWalletModalStore } from '@/shared/stores/add.wallet.modal.store.tsx';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { walletService } from '../api/api';
import { IWallet } from '../model/interfaces';

export function useAddWalletMutation() {
	const { setIsShown } = useAddWalletModalStore();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (wallet: IWallet) => walletService.addWallet(wallet),
		mutationKey: ['wallet', 'create'],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['wallets'] });
			setIsShown(false);
		},
	});
}
