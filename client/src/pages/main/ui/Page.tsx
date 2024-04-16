import styled from 'styled-components';
import { AddTransactionForm } from '../../../features/addTransaction';
import { TransactionList } from '../../../features/transactionsList';
import { NavBar } from '../../../widgets/navBar/ui';
import { WalletsContainer } from '../../../widgets/walletsContainer/ui';

const Wrapper = styled.div``;

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
