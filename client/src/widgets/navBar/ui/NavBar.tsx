import { LogOut } from '@/features/logOut';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
	height: 6vh;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #1098c5;
	z-index: 1000;
	color: white;
	text-align: center;
	align-items: center;
	padding-top: 20px;

	display: flex;
	flex-direction: row;
`;

const StyledHeaderUpper = styled.div`
	display: flex;
	justify-content: center;
`;
const StyledHeaderLower = styled.div`
	display: flex;
	gap: 10px;
	justify-content: center;
`;

const StyledHeaderTextContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StyledTitle = styled.div`
	font-size: 40px;
`;

export const NavBar: React.FC = () => {
	return (
		<>
			<StyledHeader>
				<StyledHeaderTextContainer>
					<StyledHeaderUpper>
						<StyledTitle>KALABASSET</StyledTitle>
					</StyledHeaderUpper>
					{/* <StyledHeaderLower>
						<div>ГЛАВНАЯ</div>
						<div>СТАТИСТИКА</div>
					</StyledHeaderLower> */}
				</StyledHeaderTextContainer>
				<LogOut />
			</StyledHeader>
			<Outlet />
		</>
	);
};
