import instance from '@/shared/instances/axios.api';
import { IOptionalTarget, ITarget } from '../model/target.indexes';

class TargetService {
	async getALl() {
		return await instance.get<ITarget[]>('target');
	}

	async update(id: number, newTarget: IOptionalTarget) {
		return await instance.patch(`target/${id}`, newTarget);
	}

	async delete(id: number) {
		return await instance.delete(`target/${id}`);
	}
}

export const targetService = new TargetService();
