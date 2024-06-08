import { AddTransactionForm } from '@/features/addTransaction';
import { TransactionList } from '@/features/transactionsList';
import { PageWrapper } from '@/shared/ui/PageWrapper';
import { TargetsContainer } from '@/widgets/targetsContainer';
import { WalletsContainer } from '@/widgets/walletsContainer';

export const Page: React.FC = () => {
	return (
		<PageWrapper>
			<WalletsContainer />
			<TargetsContainer />
			<AddTransactionForm />
			<TransactionList />
		</PageWrapper>
	);
};
