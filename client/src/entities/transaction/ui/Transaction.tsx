import { DateFormat } from '../helpers/dateFormater';
import { ITransaction } from '../model/interfaces';
import { MiniWrapper, Wrapper } from './components';

export const Transaction: React.FC<ITransaction> = ({
	amount,
	category,
	name,
	type,
	createdAt,
	wallet,
}) => {
	const formattedDate = DateFormat(createdAt);

	return (
		<Wrapper>
			<MiniWrapper>
				<div>{name}</div>
			</MiniWrapper>
			<MiniWrapper>
				<div>{amount}</div>
			</MiniWrapper>
			<MiniWrapper>
				<div>{type === 'expense' ? 'Трата' : 'Зачисление'}</div>
			</MiniWrapper>
			<MiniWrapper>
				<div>{wallet.name}</div>
			</MiniWrapper>
			<MiniWrapper>
				<div>{category.title}</div>
			</MiniWrapper>
			<MiniWrapper>
				<div>{formattedDate}</div>
			</MiniWrapper>
		</Wrapper>
	);
};
