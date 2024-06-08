import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	width: 100%;

	justify-content: center;

	/* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
	border-radius: 9px;

	height: 40px;
	box-sizing: border-box;
	border: 1px solid white;
	padding: 5px;
`;
export const MiniWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	text-align: center;

	width: 100%;

	background-color: lightblue;
	border-radius: 9px;
`;
