import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IAddWalletModalState } from '../interfaces';

export const useAddWalletModalStore = create<IAddWalletModalState>()(
	devtools(
		set => ({
			setIsShown: isShown => set({ isShown }),
			isShown: false,
		}),
		{ name: 'AddWalletModalStore' }
	)
);
