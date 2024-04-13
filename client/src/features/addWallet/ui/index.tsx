import styled from 'styled-components';
import { IAddWalletProps } from '../model';

const Wrapper = styled.div`
	border: 1px black dotted;
`;

export const AddWallet: React.FC<IAddWalletProps> = ({ onClick }) => {
	return <Wrapper onClick={onClick}>Add Wallet</Wrapper>;
};
