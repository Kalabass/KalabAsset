export interface IModalProps {
	component: React.ReactElement;
	isShown: boolean;
	onClick: () => void;
}

export interface IAddWalletModalState {
	isShown: boolean;
	setIsShown: (isShown: boolean) => void;
}

export interface ITokenState {
	token: string;
	setToken: (token: string) => void;
}
