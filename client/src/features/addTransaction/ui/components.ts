import styled from 'styled-components';

export const StyledInput = styled.input`
	box-sizing: border-box;
	border: 1px solid black;
	border-radius: 9px;
	height: 100%;
	padding-left: 5px;

	width: 100%;
	background-color: lightblue;
`;

export const StyledForm = styled.form`
	box-sizing: border-box;
	width: 100%;

	display: flex;
	flex-direction: column;

	justify-content: center;

	height: 60px;

	padding-inline: 10px;

	background-color: #1098c5;

	border-radius: 9px;

	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

	margin-bottom: 10px;
`;

export const StyledFormContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;

	height: 50%;
`;

export const StyledSelect = styled.select`
	border-radius: 9px;

	padding-left: 5px;

	width: 100%;

	background-color: lightblue;
`;

export const StyledButton = styled.button`
	width: 100%;
	border-radius: 9px;
	color: darkblue;
`;
