import { useWallets, Wallet } from '@/entities/wallet';
import { AddWallet } from '@/features/addWallet';
import { AddWalletForm } from '@/features/addWalletForm';
import { useAddWalletModalStore } from '@/shared/stores/add.wallet.modal.store';
import { Modal } from '@/shared/ui/Modal';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
`;

const WalletContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	overflow: auto;

	padding-bottom: 10px;

	&::-webkit-scrollbar {
		width: 1em; /* Ширина полосы прокрутки */
		height: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.5); /* Цвет ползунка */
		border-radius: 8px; /* Закругление углов ползунка */
	}

	&::-webkit-scrollbar-track {
		background-color: rgba(255, 255, 255, 0.2); /* Цвет фона полосы прокрутки */
	}

	&::-webkit-scrollbar-button {
		display: none; /* Скрыть кнопки прокрутки */
	}

	&::-webkit-scrollbar-corner {
		background-color: transparent; /* Цвет уголка между полосами прокрутки */
	}
`;

export const WalletsContainer: React.FC = () => {
	const { data, isLoading } = useWallets();
	const { isShown, setIsShown } = useAddWalletModalStore();

	return (
		<>
			<Container>
				<WalletContainer>
					{isLoading ? (
						<div>loading...</div>
					) : data?.length ? (
						data.map(wallet => <Wallet key={wallet.id} {...wallet}></Wallet>)
					) : (
						<div>NOt found</div>
					)}
				</WalletContainer>
				<>
					<AddWallet
						onClick={() => {
							setIsShown(true);
						}}
					/>
				</>
			</Container>
			<Modal
				isShown={isShown}
				onClick={() => {
					setIsShown(false);
				}}
				component={<AddWalletForm />}
			></Modal>
		</>
	);
};
