import styled from 'styled-components';

const StyledInput = styled.input`
	width: 100%;
	border: 1px solid rosybrown;
	border-radius: 10px;
	height: 5vh;

	padding-left: 10px;

	transition: border-color 0.5s;

	&::placeholder {
		color: darkgray;
	}
`;

const AuthInput: React.FC<
	React.InputHTMLAttributes<HTMLInputElement>
> = props => {
	return <StyledInput {...props} />;
};

export default AuthInput;
