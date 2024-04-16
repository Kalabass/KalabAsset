import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { categoryService } from '../../../entities/category/api';
import { transactionService } from '../../../entities/transaction/api';
import { useInput } from '../../../shared/hooks/useInput';

export const AddTransactionForm: React.FC = () => {
	const nameInputProps = useInput();
	const amountInputProps = useInput();
	const typeInputProps = useInput();
	const walletInputProps = useInput();

	const [categoryOption, setCategoryOption] = useState<number>(1);

	const query_client = useQueryClient();

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
				type: typeInputProps.value,
				wallet: +walletInputProps.value,
			}),
		mutationKey: ['transaction', 'add'],
		onSuccess: () => {
			query_client.invalidateQueries({ queryKey: ['transactions'] });
		},
	});

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		addTransactionMutation.mutate();
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<input placeholder='name' {...nameInputProps} />
			<input placeholder='amount' {...amountInputProps} />
			<input placeholder='type' {...typeInputProps} />
			<select
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
			</select>
			<input placeholder='wallet' {...walletInputProps} />
			<button>create</button>
		</form>
	);
};
