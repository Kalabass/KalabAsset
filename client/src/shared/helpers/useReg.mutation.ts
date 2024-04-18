import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authService } from '../api/auth.service';
import { setTokenToLocalStorage } from '../lib/localStorage.helper';
import { IResponseLogin, IUserRegData } from '../model/auth.model';

export function useRegMutation(user: IUserRegData) {
	const navigate = useNavigate();
	return useMutation<IResponseLogin>({
		mutationFn: async () => {
			const response = await authService.signUp(user);
			return response.data;
		},
		mutationKey: ['reg'],
		//@ts-ignore
		onSuccess: (data: IResponseLoginData) => {
			toast.success('Успешно!');
			setTokenToLocalStorage(data.token);
			navigate('/');
		},
		//@ts-ignore
		onError: (error: IErrorResponse) =>
			toast.error(error.response.data.message[0]),
	});
}
