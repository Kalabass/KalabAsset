import { Wallet } from '@/entities/wallet';
import { AddWallet } from '@/features/addWallet';
import { AddWalletForm } from '@/features/addWalletForm';
import { useAddWalletModalStore } from '@/shared/stores/add.wallet.modal.store';
import { Modal } from '@/shared/ui/Modal';
import styled from 'styled-components';
import { useWallets } from '../lib';

const Container = styled.div`
	display: flex;
	padding: 10px;
	border: 1px solid black;
	justify-content: center;
	gap: 10px;
`;

export const WalletsContainer: React.FC = () => {
	const { data, isLoading } = useWallets();
	const { isShown, setIsShown } = useAddWalletModalStore();

	return (
		<Container>
			<Modal
				isShown={isShown}
				onClick={() => {
					setIsShown(false);
				}}
				component={<AddWalletForm />}
			></Modal>
			{isLoading ? (
				<div>loading...</div>
			) : data?.length ? (
				data.map(wallet => <Wallet key={wallet.id} {...wallet}></Wallet>)
			) : (
				<div>NOt found</div>
			)}
			<AddWallet
				onClick={() => {
					setIsShown(true);
				}}
			/>
		</Container>
	);
};
