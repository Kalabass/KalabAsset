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
	position: absolute;
	background-color: white;
	width: 50%;
	height: 50%;
	border: 1px solid black;
	border-radius: 7px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	z-index: 999;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	margin-left: 25%;
`;

export const Modal: React.FC<IModalProps> = ({
	component,
	isShown,
	onClick,
}) => {
	return (
		<Container>
			{isShown && (
				<>
					<ModalMask onClick={onClick} />
					<ModalWrapper>{component}</ModalWrapper>
				</>
			)}
		</Container>
	);
};
