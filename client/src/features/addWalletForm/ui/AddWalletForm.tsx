import { useAddWalletMutation } from '@/entities/wallet';

import { useInput } from '@/shared/helpers/useInput';
import styled from 'styled-components';
import { StyledForm } from './components';

const Wrapper = styled.div`
	box-sizing: border-box;
	background-color: lightblue;

	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	margin: 5%;
`;

const StyledInput = styled.input`
	border-radius: 9px;
	height: 25px;
`;

const StyledButton = styled.button`
	border-radius: 9px;
	height: 25px;
	background-color: #1098c5;
	color: white;
`;
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
		<Wrapper>
			<h1>Добавление кошелька</h1>
			<StyledForm onSubmit={onClick}>
				<StyledInput placeholder='Название' {...walletName}></StyledInput>
				<StyledInput placeholder='Сумма' {...walletAmount}></StyledInput>
				<StyledButton>ДОБАВИТЬ </StyledButton>
			</StyledForm>
		</Wrapper>
	);
};
