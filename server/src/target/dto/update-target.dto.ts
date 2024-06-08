import { PartialType } from '@nestjs/mapped-types';
import { CreateTargetDto } from './create-target.dto';

export class UpdateTargetDto extends PartialType(CreateTargetDto) {
	currentAmount?: number;
	isDone?: boolean;
	isCurrent?: boolean;
}
