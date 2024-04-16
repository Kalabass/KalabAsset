import instance from '../../../shared/api/axios.api';
import { ICategory } from '../model/interfaces';

class CategoryService {
	async getAll() {
		return await instance.get<ICategory[]>('category');
	}
}
export const categoryService = new CategoryService();
