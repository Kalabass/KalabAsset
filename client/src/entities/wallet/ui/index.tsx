import styled from 'styled-components';
import { IWalletProps } from '../model';
const Wrapper = styled.div`
	border: 1px solid black;
	width: 100%;
`;

export const Wallet: React.FC<IWalletProps> = ({ amount, name }) => {
	return (
		<Wrapper>
			<div>{name}</div>
			<div>{amount}</div>
		</Wrapper>
	);
};
