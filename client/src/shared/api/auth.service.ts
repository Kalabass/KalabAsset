import instance from '../instances/axios.api';
import {
	IResponseLogin,
	IUserLoginData,
	IUserRegData,
} from '../model/auth.model';

class AuthService {
	async login(user: IUserLoginData) {
		return instance.post<IResponseLogin>('auth/login', user);
	}

	async signUp(user: IUserRegData) {
		return instance.post<IResponseLogin>('auth/reg', user);
	}
}

export const authService = new AuthService();
