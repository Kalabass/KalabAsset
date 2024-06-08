import { useInput } from '@/shared/helpers/useInput';

export const AddTargetForm: React.FC = () => {
	const targetTitle = useInput();
	const targetComment = useInput();
	const targetAmount = useInput();
	const targetDate = useInput();
	return (
		<div>
			<input placeholder='название' {...targetTitle} />
			<input placeholder='комментарий' {...targetComment} />
			<input placeholder='сумма' {...targetAmount} />
			<input placeholder='дата' type='date' {...targetDate} />
		</div>
	);
};
