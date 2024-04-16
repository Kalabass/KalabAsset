import instance from '../../shared/api/axios.api';
import { IWallet } from '../wallet/model/interfaces';

class WalletService {
	private URL = 'http://localhost:5252/api/wallet';

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
