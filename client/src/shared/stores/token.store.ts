import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ITokenState } from '../interfaces';

export const useTokenStore = create<ITokenState>()(
	devtools(
		set => ({
			token: JSON.parse(localStorage.getItem('token') || ''),
			setToken: token => set({ token }),
		}),
		{ name: 'TokenStore' }
	)
);
