import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { Target } from './entities/target.entity';

@Injectable()
export class TargetService {
	constructor(
		@InjectRepository(Target)
		private readonly targetRepository: Repository<Target>
	) {}

	async create(createTargetDto: CreateTargetDto, id: number) {
		const newTarget = {
			title: createTargetDto.title,
			amount: createTargetDto.amount,
			comment: createTargetDto.comment,
			dateTo: createTargetDto.dateTo,
			user: { id },
		};
		return await this.targetRepository.save(newTarget);
	}

	async findAll(id: number) {
		return await this.targetRepository.find({
			where: {
				user: { id },
			},
			order: {
				id: 'ASC',
			},
		});
	}

	async update(id: number, updateTargetDto: UpdateTargetDto) {
		const target = await this.targetRepository.findOne({
			where: { id },
		});

		if (!target) throw new NotFoundException('Target Not Found');

		if (
			updateTargetDto.currentAmount &&
			updateTargetDto.currentAmount >= target.amount
		) {
			updateTargetDto.isDone = true;
			updateTargetDto.isCurrent = false;
		}

		return this.targetRepository.update(id, updateTargetDto);
	}

	async remove(id: number) {
		const target = await this.targetRepository.findOne({
			where: { id },
		});

		if (!target) throw new NotFoundException('Target Not Found');

		return this.targetRepository.delete(id);
	}
}
