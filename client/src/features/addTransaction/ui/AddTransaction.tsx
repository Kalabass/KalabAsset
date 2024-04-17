import { categoryService } from '@/entities/category';
import { transactionService } from '@/entities/transaction';
import { useInput } from '@/shared/hooks/useInput';
import { useWallets } from '@/widgets/walletsContainer';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	border: 1px solid black;
	border-radius: 8px;
	height: 20px;
	padding-left: 5px;
`;

const StyledForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 10px;
	justify-content: center;
`;

const StyledSelect = styled.select`
	border-radius: 8px;
	height: 25px;
	padding-left: 5px;
`;

export const AddTransactionForm: React.FC = () => {
	const query_client = useQueryClient();

	const nameInputProps = useInput();
	const amountInputProps = useInput();

	const wallets = useWallets();

	const [categoryOption, setCategoryOption] = useState<number>(4);
	const [typeOption, setTypeOption] = useState<string>('expense');
	console.log('wallets: ');
	console.log(wallets.data);

	const [walletOption, setWalletOption] = useState<number>(27);

	const categories = useQuery({
		queryKey: ['categories'],
		queryFn: () => categoryService.getAll(),
		select: ({ data }) => data,
	});

	const addTransactionMutation = useMutation({
		mutationFn: () =>
			transactionService.addTransaction({
				amount: +amountInputProps.value,
				category: +categoryOption,
				name: nameInputProps.value,
				type: typeOption,
				wallet: walletOption,
			}),
		mutationKey: ['transaction', 'add'],
		onSuccess: () => {
			query_client.invalidateQueries({ queryKey: ['transactions'] });
			query_client.invalidateQueries({ queryKey: ['wallets'] });
		},
	});

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		addTransactionMutation.mutate();
	};

	return (
		<StyledForm onSubmit={onSubmitHandler}>
			<StyledInput placeholder='название' {...nameInputProps} />
			<StyledInput placeholder='сумма' {...amountInputProps} />
			<StyledSelect
				value={typeOption}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					setTypeOption(e.target.value)
				}
			>
				<option value={'income'}>зачисление</option>
				<option value={'expense'}>трата</option>
			</StyledSelect>

			<StyledSelect
				value={walletOption}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					setWalletOption(+e.target.value)
				}
			>
				{wallets.data?.map(wallet => (
					<option key={wallet.id} value={wallet.id}>
						{wallet.name}
					</option>
				))}
			</StyledSelect>
			<StyledSelect
				value={categoryOption}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					setCategoryOption(+e.target.value)
				}
			>
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
