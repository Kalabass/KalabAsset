import styled from 'styled-components';
import { LogOut } from '../../../features/logOut';

const StyledHeader = styled.div`
	height: 6vh;
	top: 0;
	left: 0;
	width: 100%;
	background-color: black;
	z-index: 1000;
	color: white;
	text-align: center;
	align-items: center;
	padding-top: 20px;
`;

export const NavBar: React.FC = () => {
	return (
		<StyledHeader>
			<a>KALABASSET</a>
			<LogOut />
		</StyledHeader>
	);
};
