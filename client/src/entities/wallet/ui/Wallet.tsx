import styled from 'styled-components';
import { IWallet } from '../model/interfaces';

const Wrapper = styled.div`
	border: 1px solid black;
	border-radius: 9px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

	padding: 5px;

	min-width: 200px;
	width: 200px;

	height: 40px;

	font-weight: 600;
`;

export const Wallet: React.FC<IWallet> = ({ amount, name }) => {
	return (
		<Wrapper>
			<div>{name}</div>
			<div>{amount}</div>
		</Wrapper>
	);
};
