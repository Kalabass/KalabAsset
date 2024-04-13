export interface IUserLoginData {
	mail: string;
	password: string;
}

export interface IUserRegData {
	mail: string;
	password: string;
	password2: string;
	nick: string;
}

export interface IResponseLoginData {
	id: number;
	mail: string;
	token: string;
}

export interface IErrorResponse {
	response: {
		data: {
			message: string;
		};
	};
}

export interface IResponseLogin {
	data: IResponseLoginData;
	status: number;
}
