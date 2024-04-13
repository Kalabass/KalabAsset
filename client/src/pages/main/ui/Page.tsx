import styled from 'styled-components';
import { NavBar } from '../../../widgets/navBar/ui';
import { WalletsContainer } from '../../../widgets/walletsContainer/ui';

const Wrapper = styled.div``;

export const Page: React.FC = () => {
	return (
		<Wrapper>
			<NavBar></NavBar>
			<WalletsContainer />
		</Wrapper>
	);
};
