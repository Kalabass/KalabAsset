import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authService } from '../../../shared/api/auth.service';
import { useInput } from '../../../shared/hooks/useInput';
import { setTokenToLocalStorage } from '../../../shared/lib/localStorage.helper';
import {
	IResponseLogin,
	IResponseLoginData,
} from '../../../shared/model/auth.model';
import AuthInput from '../../../shared/ui/AuthInput';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;

	width: 60%;

	justify-content: center;
	align-items: center;
`;

const StyledButton = styled.button`
	height: 5vh;
	width: 103%;
	border: none;
	border-radius: 10px;
	background-color: rosybrown;

	font-size: 4vh;
`;

export const RegForm: React.FC = () => {
	const nickNameInputProps = useInput();
	const mailInputProps = useInput();
	const passwordInputProps = useInput();
	const passwordCheckInputProps = useInput();

	const navigate = useNavigate();

	const RegMutation = useMutation<IResponseLogin>({
		mutationFn: async () => {
			const response = await authService.signUp({
				mail: mailInputProps.value,
				nick: nickNameInputProps.value,
				password: passwordInputProps.value,
				password2: passwordCheckInputProps.value,
			});
			return response.data;
		},
		mutationKey: ['reg'],
		//@ts-ignore
		onSuccess: (data: IResponseLoginData) => {
			setTokenToLocalStorage(data.token);
			navigate('/main');
		},
		//@ts-ignore
		onError: (data: IResponseLoginData) => console.log(data),
	});

	const onClickHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		RegMutation.mutate();
	};

	return (
		<StyledForm onSubmit={onClickHandler}>
			<AuthInput placeholder='nick' {...nickNameInputProps} />
			<AuthInput placeholder='mail' {...mailInputProps} />
			<AuthInput placeholder='password' {...passwordInputProps} />
			<AuthInput placeholder='password' {...passwordCheckInputProps} />
			<StyledButton>Регистрация</StyledButton>
		</StyledForm>
	);
};
