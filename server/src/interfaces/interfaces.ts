export interface IUser {
	id?: number;
	nick?: string;
	mail?: string;
	password?: string;
	password2?: string;
}

export interface IRegistrationData {
	nick: string;
	mail: string;
	password: string;
	password2: string;
}
