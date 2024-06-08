import styled from 'styled-components';

export const Wrapper = styled.div`
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
