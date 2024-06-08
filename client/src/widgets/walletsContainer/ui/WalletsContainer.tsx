import { useWallets, Wallet } from '@/entities/wallet';
import { AddWallet } from '@/features/addWallet';
import { AddWalletForm } from '@/features/addWalletForm';
import { useAddWalletModalStore } from '@/shared/stores/add.wallet.modal.store.tsx';
import ContainerTitle from '@/shared/ui/ContainerTitle';
import { Modal } from '@/shared/ui/Modal';

import styled from 'styled-components';

const WalletsContainerWrapper = styled.div`
	box-sizing: border-box;
	border-radius: 9px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	padding: 10px;

	margin-bottom: 10px;

	background-color: #1098c5;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
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
	const { isShown, setIsShown, component, setComponent } =
		useAddWalletModalStore();

	return (
		<>
			<WalletsContainerWrapper>
				<ContainerTitle title='КОШЕЛЬКИ:' />
				<Container>
					<WalletContainer>
						<AddWallet
							onClick={() => {
								setIsShown(true);
								setComponent(<AddWalletForm />);
							}}
						/>
						{isLoading ? (
							<div>loading...</div>
						) : data?.length ? (
							data.map(wallet => <Wallet key={wallet.id} {...wallet}></Wallet>)
						) : (
							<div></div>
						)}
					</WalletContainer>
				</Container>
			</WalletsContainerWrapper>
			<Modal
				onClick={() => {
					setIsShown(false);
				}}
				component={<AddWalletForm />}
				isShown={isShown}
			></Modal>
		</>
	);
};
