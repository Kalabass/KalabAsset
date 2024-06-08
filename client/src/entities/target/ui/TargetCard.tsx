import { UseDateFormat } from '@/shared/helpers/useDateFormater';
import styled from 'styled-components';
import { ITargetCardProps } from '../model/target.indexes';

const Wrapper = styled.div`
	box-sizing: border-box;
	border: 1px solid black;
	border-radius: 9px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

	width: 200px;
	height: 60px;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	padding-inline: 5px;

	font-weight: 600;

	background-color: lightblue;
	cursor: pointer;
`;

const UpperSide = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const UpperSideDate = styled.div`
	color: darkblue;
`;

export const TargetCard: React.FC<ITargetCardProps> = ({
	title,
	dateTo,
	amount,
	currentAmount,
	isDone,
	isCurrent,
}) => {
	return (
		<Wrapper>
			<UpperSide>
				<div>{title}</div>
				<UpperSideDate>{dateTo ? UseDateFormat(dateTo) : ''}</UpperSideDate>
			</UpperSide>
			<div>{`${currentAmount}/${amount}`}</div>
		</Wrapper>
	);
};
