import styled from 'styled-components';
import { IAddWalletProps } from '../model/interfaces';

const Wrapper = styled.div`
	border: 1px solid black;
	border-radius: 9px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

	padding: 5px;

	min-width: 200px;
	width: 200px;

	height: 20px;

	font-weight: 600;

	margin-top: 10px;

	background-color: #98ff98;
`;

export const AddWallet: React.FC<IAddWalletProps> = ({ onClick }) => {
	return <Wrapper onClick={onClick}>Add Wallet</Wrapper>;
};
