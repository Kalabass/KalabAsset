import { useQuery } from '@tanstack/react-query';
import { targetService } from './tasrget.service';

export function useTargets() {
	return useQuery({
		queryFn: () => targetService.getALl(),
		queryKey: ['targets'],
		select: ({ data }) => data,
	});
}
