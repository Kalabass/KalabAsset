export interface IModalProps {
	onClick: () => void;
	component?: React.ReactElement;
	isShown?: boolean;
}

export interface IAddWalletModalState {
	isShown: boolean;
	component: React.ReactElement;
	setIsShown: (isShown: boolean) => void;
	setComponent: (component: React.ReactElement) => void;
}

export interface ITokenState {
	token: string;
	setToken: (token: string) => void;
}
