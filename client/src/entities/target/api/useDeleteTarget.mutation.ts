import { useMutation } from '@tanstack/react-query';
import { targetService } from './tasrget.service';

export function useDeleteTarget() {
	return useMutation({
		mutationFn: (id: number) => targetService.delete(id),
		mutationKey: ['targets', 'delete'],
	});
}
