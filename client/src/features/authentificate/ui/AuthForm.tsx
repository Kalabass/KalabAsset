import { useInput } from '@/shared/helpers/useInput';
import { useLoginMutation } from '@/shared/helpers/useLogin.mutation';
import AuthInput from '@/shared/ui/AuthInput';
import { StyledButton, StyledForm } from './components';

export const AuthForm: React.FC = () => {
	const mailInputProps = useInput();
	const passwordInputProps = useInput();

	const LoginMutation = useLoginMutation();

	const onClickHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		LoginMutation.mutate({
			mail: mailInputProps.value,
			password: passwordInputProps.value,
		});
	};

	return (
		<StyledForm onSubmit={onClickHandler}>
			<AuthInput placeholder='почта' {...mailInputProps} />
			<AuthInput type='password' placeholder='пароль' {...passwordInputProps} />
			<StyledButton>Вход</StyledButton>
		</StyledForm>
	);
};
