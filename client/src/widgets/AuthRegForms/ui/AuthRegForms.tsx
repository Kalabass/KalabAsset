import { AuthForm } from '@/features/authentificate';
import { RegForm } from '@/features/register';
import SKullImgCOntainer from '@/shared/ui/SKullImgCOntainer';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 35%;
	height: 600px;
	min-height: 500px;
	min-width: 200px;
	background-color: #c1c2bd;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 10px;
	padding: 20px;
	justify-items: center;
`;

const GridItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; /* Выравниваем элементы по центру по вертикали */
	width: 100%;
	align-items: center;
`;

const ButtonGridItem = styled(GridItem)`
	align-self: end;
`;

const StyledButton = styled.button`
	background: none;
	border: none;

	cursor: pointer;

	margin-top: 10px;

	text-decoration: underline;
`;

export const AuthRegForms: React.FC = () => {
	const [isReg, setIsReg] = useState<boolean>(false);

	return (
		<Container>
			<GridItem>
				<SKullImgCOntainer width={'40%'} />
				<h1>KalabAsset</h1>
			</GridItem>
			<GridItem>{isReg ? <RegForm /> : <AuthForm />}</GridItem>
			<ButtonGridItem>
				<StyledButton onClick={() => setIsReg(!isReg)}>
					{isReg ? 'уже есть аккаунт?' : 'Ещё нет аккаунта?'}
				</StyledButton>
			</ButtonGridItem>
		</Container>
	);
};
