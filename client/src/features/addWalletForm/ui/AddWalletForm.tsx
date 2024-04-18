import { useAddWalletMutation } from '@/entities/wallet';
import { useInput } from '@/shared/helpers/useInput';
import { StyledForm } from './components';

export const AddWalletForm: React.FC = () => {
	const walletName = useInput();
	const walletAmount = useInput();

	const AddWalletMutation = useAddWalletMutation();

	const onClick = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		AddWalletMutation.mutate({
			amount: +walletAmount.value,
			name: walletName.value,
		});
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
