import instance from '../../../shared/instances/axios.api';
import { IWallet } from '../model/interfaces';

class WalletService {
	async getAll() {
		return await instance.get<IWallet[]>('wallet');
	}

	async getOne(id: number) {
		return instance.get<IWallet>(`wallet/${id}`);
	}

	async addWallet(wallet: IWallet) {
		return instance.post<IWallet>('wallet', wallet);
	}

	async deleteWallet(id: number) {
		return instance.delete(`wallet/${id}`);
	}

	async updateWallet(id: number, newWallet: IWallet) {
		return instance.patch(`wallet/${id}`, newWallet);
	}
}
export const walletService = new WalletService();
