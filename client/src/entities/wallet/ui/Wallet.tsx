import styled from 'styled-components';
import { IWallet } from '../model/interfaces';

const Wrapper = styled.div`
	border: 1px solid black;
	width: 100%;
`;

export const Wallet: React.FC<IWallet> = ({ amount, name }) => {
	return (
		<Wrapper>
			<div>{name}</div>
			<div>{amount}</div>
		</Wrapper>
	);
};
