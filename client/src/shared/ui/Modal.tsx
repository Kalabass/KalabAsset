import styled from 'styled-components';
import { IModalProps } from '../interfaces';

const ModalMask = styled.div`
	width: 1000%;
	height: 1000%;
	background-color: black;
	position: fixed;
	margin-top: -50%;
	margin-left: -50%;
	z-index: 997;
	opacity: 0.8;
`;

const ModalWrapper = styled.div`
	position: fixed;

	background-color: lightblue;

	width: 50%;
	height: 50%;

	border-radius: 9px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

	z-index: 999;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	padding-left: 25%;
	position: absolute;
	margin-top: -250px;
	background-color: lightblue;
`;

export const Modal: React.FC<IModalProps> = ({
	onClick,
	component,
	isShown,
}) => {
	return (
		isShown && (
			<>
				<Container>
					<ModalWrapper>{component}</ModalWrapper>
				</Container>
				<ModalMask onClick={onClick} />
			</>
		)
	);
};
