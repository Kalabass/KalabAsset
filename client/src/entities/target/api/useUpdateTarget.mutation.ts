import { useMutation } from '@tanstack/react-query';
import { IOptionalTarget } from '../model/target.indexes';
import { targetService } from './tasrget.service';

export function useUpdateTarget() {
	return useMutation({
		mutationFn: (id: number, newTarget: IOptionalTarget) =>
			targetService.update(id, newTarget),
		mutationKey: ['targets', 'update'],
	});
}
