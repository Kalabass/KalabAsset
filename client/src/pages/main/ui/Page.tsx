import { AddTransactionForm } from '@/features/addTransaction';
import { TransactionList } from '@/features/transactionsList';
import { NavBar } from '@/widgets/navBar';
import { WalletsContainer } from '@/widgets/walletsContainer';
import { Wrapper } from './components';

export const Page: React.FC = () => {
	return (
		<Wrapper>
			<NavBar></NavBar>
			<WalletsContainer />
			<AddTransactionForm />
			<TransactionList />
		</Wrapper>
	);
};
