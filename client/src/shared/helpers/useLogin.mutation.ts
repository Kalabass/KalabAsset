import { IUser } from '@/entities/user';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { authService } from '../api/auth.service';
import { setTokenToLocalStorage } from '../lib/localStorage.helper';
import { IErrorResponse, IResponseLoginData } from '../model/auth.model';

export function useLoginMutation() {
	const navigate = useNavigate();
	return useMutation<IResponseLoginData, IErrorResponse, IUser, unknown>({
		mutationFn: async (user: IUser) => {
			const response: AxiosResponse<IResponseLogin, any> =
				await authService.login(user);
			return response.data;
		},
		mutationKey: ['login'],
		onSuccess: (data: IResponseLoginData) => {
			setTokenToLocalStorage(data.token);
			navigate('/');
		},
		onError: (error: IErrorResponse) => toast(error.response.data.message),
	});
}
