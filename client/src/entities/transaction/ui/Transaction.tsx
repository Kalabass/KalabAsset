import styled from 'styled-components';
import { ITransaction } from '../model/interfaces';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
`;
const MiniWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 5px;
`;
export const Transaction: React.FC<ITransaction> = ({
	amount,
	category,
	name,
	type,
	createdAt,
}) => {
	return (
		<Wrapper>
			<MiniWrapper>
				<a>долларс:</a>
				<div>{amount}</div>
			</MiniWrapper>
			<MiniWrapper>
				<a>категория:</a>
				<div>{category.title}</div>
			</MiniWrapper>
			<MiniWrapper>
				<a>:</a>
				<div>{name}</div>
			</MiniWrapper>
			<MiniWrapper>
				<a>тип: </a>
				<div>{type === 'expense' ? 'Трата' : 'Зачисление'}</div>
			</MiniWrapper>
			<MiniWrapper>
				<a>дата</a>
				<div>{createdAt.toString()}</div>
			</MiniWrapper>
		</Wrapper>
	);
};
