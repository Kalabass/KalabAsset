import { useInput } from '@/shared/helpers/useInput';
import { useRegMutation } from '@/shared/helpers/useReg.mutation';
import AuthInput from '@/shared/ui/AuthInput';
import { StyledButton, StyledForm } from './components';

export const RegForm: React.FC = () => {
	const nickNameInputProps = useInput();
	const mailInputProps = useInput();
	const passwordInputProps = useInput();
	const passwordCheckInputProps = useInput();

	const RegMutation = useRegMutation({
		mail: mailInputProps.value,
		nick: nickNameInputProps.value,
		password: passwordInputProps.value,
		password2: passwordCheckInputProps.value,
	});

	const onClickHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		RegMutation.mutate();
	};

	return (
		<StyledForm onSubmit={onClickHandler}>
			<AuthInput placeholder='имя' {...nickNameInputProps} />
			<AuthInput placeholder='почта' {...mailInputProps} />
			<AuthInput placeholder='пароль' type='password' {...passwordInputProps} />
			<AuthInput
				placeholder='подтверждение пароля'
				type='password'
				{...passwordCheckInputProps}
			/>
			<StyledButton>Регистрация</StyledButton>
		</StyledForm>
	);
};
