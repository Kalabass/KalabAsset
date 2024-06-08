export interface ITarget {
	id: number;
	amount: number;
	currentAmount: number;
	title: string;
	comment: string;
	dateTo: Date | null;
	isDone: boolean;
	isCurrent: boolean;
}

export interface ITargetData extends Omit<ITarget, 'id'> {}

export interface IOptionalTarget extends Partial<ITargetData> {}

export interface ITargetCardProps extends ITarget {}
