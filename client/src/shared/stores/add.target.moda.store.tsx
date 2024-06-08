import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IAddWalletModalState } from '../interfaces';

export const useAddTargetModalStore = create<IAddWalletModalState>()(
	devtools(
		set => ({
			component: <></>,
			setComponent: component => set({ component }),
			setIsShown: isShown => set({ isShown }),
			isShown: false,
		}),
		{ name: 'AddWalletModalStore' }
	)
);
