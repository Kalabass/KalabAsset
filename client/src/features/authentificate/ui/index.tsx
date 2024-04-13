import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { authService } from '../../../shared/api/auth.service';
import { useInput } from '../../../shared/hooks/useInput';
import { setTokenToLocalStorage } from '../../../shared/lib/localStorage.helper';
import {
	IErrorResponse,
	IResponseLogin,
	IResponseLoginData,
} from '../../../shared/model/auth.model';
import AuthInput from '../../../shared/ui/AuthInput';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;

	width: 60%;
	height: 100%;

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

export const AuthForm: React.FC = () => {
	const mailInputProps = useInput();
	const passwordInputProps = useInput();
	const navigate = useNavigate();

	const LoginMutation = useMutation<IResponseLogin>({
		mutationFn: async () => {
			const response = await authService.login({
				mail: mailInputProps.value,
				password: passwordInputProps.value,
			});
			return response.data;
		},
		mutationKey: ['login'],
		//@ts-ignore
		onSuccess: (data: IResponseLoginData) => {
			setTokenToLocalStorage(data.token);
			navigate('/main');
		},
		//@ts-ignore
		onError: (error: IErrorResponse) => toast(error.response.data.message),
	});

	const onClickHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		LoginMutation.mutate();
	};

	return (
		<StyledForm onSubmit={onClickHandler}>
			<AuthInput placeholder='mail' {...mailInputProps} />
			<AuthInput
				type='password'
				placeholder='password'
				{...passwordInputProps}
			/>
			<StyledButton>Вход</StyledButton>
		</StyledForm>
	);
};
