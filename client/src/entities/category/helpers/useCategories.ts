import { useQuery } from '@tanstack/react-query';
import { categoryService } from '../api/api';

export const useCategories = () => {
	return useQuery({
		queryKey: ['categories'],
		queryFn: () => categoryService.getAll(),
		select: ({ data }) => data,
	});
};
