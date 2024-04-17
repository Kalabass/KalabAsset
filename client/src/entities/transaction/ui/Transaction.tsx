import styled from 'styled-components';
import { ITransaction } from '../model/interfaces';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	width: 75%;
	margin-left: 12%;
	justify-content: center;

	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	border-radius: 8px;
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
	wallet,
}) => {
	const date = new Date(createdAt);

	const year = date.getFullYear(); // Получаем год (например, 2024)
	const month = date.getMonth() + 1; // Получаем месяц (0-11), добавляем 1 для получения реального месяца (например, апрель будет 4)
	const day = date.getDate(); // Получаем день месяца (например, 16)

	const formattedDate = `${year}-${month}-${day}`; // Формируем строку с годом, месяцем и днем
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
