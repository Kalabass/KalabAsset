import { IAddWalletProps } from '../model/interfaces';
import { Wrapper } from './components';

export const AddWallet: React.FC<IAddWalletProps> = ({ onClick }) => {
	return <Wrapper onClick={onClick}>Добавить кошелёк</Wrapper>;
};
