import styled from 'styled-components';
import { AuthRegForms } from '../../../widgets/AuthRegForms/ui';

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	background-color: wheat;
	margin-top: 0px;
	justify-content: center;
	align-items: center;
	display: flex;
`;

export const Page: React.FC = () => {
	return (
		<Wrapper>
			<AuthRegForms />
		</Wrapper>
	);
};