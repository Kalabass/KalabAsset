import { useTargets } from '@/entities/target/api/useTargets.query';
import { TargetCard } from '@/entities/target/ui/TargetCard';
import { AddTargetForm } from '@/features/addTargetForm/ui/AddTargetForm';
import { useAddTargetModalStore } from '@/shared/stores/add.target.moda.store';
import ContainerTitle from '@/shared/ui/ContainerTitle';
import { Modal } from '@/shared/ui/Modal';
import styled from 'styled-components';

const TargetsContainerWrapper = styled.div`
	box-sizing: border-box;
	border-radius: 9px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	padding: 10px;
	margin-bottom: 10px;

	background-color: #1098c5;
`;

const StyledTargetsContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	overflow: auto;

	padding-bottom: 10px;
`;

const AddTargetCard = styled.div`
	background-color: rgb(173, 216, 230, 0.8);

	box-sizing: border-box;
	border: 1px dashed darkblue;
	border-radius: 9px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

	width: 200px;
	height: 60px;

	display: flex;
	flex-direction: column;
	justify-content: center;

	padding-inline: 5px;

	font-weight: 600;

	cursor: pointer;
`;

export const TargetsContainer: React.FC = () => {
	const { isShown, setIsShown, setComponent } = useAddTargetModalStore();
	const targetQuery = useTargets();
	return (
		<>
			<TargetsContainerWrapper>
				<ContainerTitle title='ЦЕЛИ:' />
				<StyledTargetsContainer>
					<AddTargetCard
						onClick={() => {
							setIsShown(true);
							setComponent(<AddTargetForm />);
						}}
					>
						Добавить цель
					</AddTargetCard>
					{targetQuery.isLoading ? (
						<div>loading</div>
					) : targetQuery.isError ? (
						<div>error</div>
					) : targetQuery.data ? (
						targetQuery.data.map(target => (
							<TargetCard key={target.id} {...target}></TargetCard>
						))
					) : (
						<div></div>
					)}
				</StyledTargetsContainer>
			</TargetsContainerWrapper>
			<Modal
				onClick={() => {
					setIsShown(false);
				}}
				component={<AddTargetForm />}
				isShown={isShown}
			></Modal>
		</>
	);
};
