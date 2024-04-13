import instance from '../../../shared/api/axios.api';
import { IWallet } from '../model';

class WalletService {
	private URL = 'http://localhost:5252/api/wallet';

	async getAll() {
		return await instance.get<IWallet[]>('wallet');
	}

	async getOne(id: number) {
		return instance.get<IWallet>(`${this.URL}/${id}`);
	}

	async addWallet(wallet: IWallet) {
		return instance.post<IWallet>(this.URL, wallet);
	}

	async deleteWallet(id: number) {
		return instance.delete(`${this.URL}/${id}`);
	}

	async updateWallet(id: number, newWallet: IWallet) {
		return instance.patch(`${this.URL}/${id}`, newWallet);
	}
}
export const walletService = new WalletService();
