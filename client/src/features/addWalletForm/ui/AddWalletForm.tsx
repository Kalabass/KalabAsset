import { walletService } from '@/entities/wallet';
import { useInput } from '@/shared/hooks/useInput';
import { useAddWalletModalStore } from '@/shared/stores/add.wallet.modal.store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 50%;
	gap: 10px;
`;

export const AddWalletForm: React.FC = () => {
	const queryClient = useQueryClient();

	const walletName = useInput();
	const walletAmount = useInput();

	const { setIsShown } = useAddWalletModalStore();

	const AddWalletMutation = useMutation({
		mutationFn: () =>
			walletService.addWallet({
				amount: +walletAmount.value,
				name: walletName.value,
			}),
		mutationKey: ['wallet', 'create'],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['wallets'] });
		},
	});

	const onClick = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		AddWalletMutation.mutate();
		setIsShown(false);
	};

	return (
		<>
			<h1>Добавление кошелька</h1>
			<StyledForm onSubmit={onClick}>
				<input placeholder='Название' {...walletName}></input>
				<input placeholder='Сумма' {...walletAmount}></input>
				<button>Добавить</button>
			</StyledForm>
		</>
	);
};
