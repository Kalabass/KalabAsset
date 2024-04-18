import { useCategories } from '@/entities/category';
import { useAddTransactionMutation } from '@/entities/transaction/helpers/useAddTransaction';
import { useWallets } from '@/entities/wallet';
import { useInput } from '@/shared/helpers/useInput';
import { useSelect } from '@/shared/helpers/useSelect';
import React from 'react';
import { StyledForm, StyledInput, StyledSelect } from './components';

export const AddTransactionForm: React.FC = () => {
	const nameInputProps = useInput();
	const amountInputProps = useInput();

	const walletSelect = useSelect<number>(0);
	const categoriesSelect = useSelect<number>(4);
	const typeSelect = useSelect<string>('expense');

	const wallets = useWallets();
	const categories = useCategories();

	const transactionMutation = useAddTransactionMutation({
		amount: +amountInputProps.value,
		category: categoriesSelect.value,
		name: nameInputProps.value,
		type: typeSelect.value,
		wallet: walletSelect.value,
	});

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		transactionMutation.mutate();
	};

	return (
		<StyledForm onSubmit={onSubmitHandler}>
			<StyledInput placeholder='название' {...nameInputProps} />
			<StyledInput placeholder='сумма' {...amountInputProps} />
			<StyledSelect {...typeSelect}>
				<option value={'income'}>зачисление</option>
				<option value={'expense'}>трата</option>
			</StyledSelect>
			<StyledSelect {...walletSelect}>
				{wallets.data?.map(wallet => (
					<option key={wallet.id} value={wallet.id}>
						{wallet.name}
					</option>
				))}
			</StyledSelect>
			<StyledSelect {...categoriesSelect}>
				{categories.data?.map(category => (
					<option key={category.id} value={category.id}>
						{category.title}
					</option>
				))}
			</StyledSelect>
			<button>Добавить транзакцию</button>
		</StyledForm>
	);
};
