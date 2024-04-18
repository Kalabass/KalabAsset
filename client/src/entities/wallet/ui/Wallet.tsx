import { IWallet } from '../model/interfaces';
import { Wrapper } from './components';

export const Wallet: React.FC<IWallet> = ({ amount, name }) => {
	return (
		<Wrapper>
			<div>{name}</div>
			<div>{amount}</div>
		</Wrapper>
	);
};
