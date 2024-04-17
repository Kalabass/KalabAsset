import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
	constructor(
		@InjectRepository(Category)
		private readonly categoryRepository: Repository<Category>
	) {}

	async create(createCategoryDto: CreateCategoryDto) {
		const isExist = await this.categoryRepository.findBy({
			title: createCategoryDto.title.toLowerCase(),
		});

		if (isExist.length)
			throw new BadRequestException('THis category already exist!');

		const newCategory = {
			title: createCategoryDto.title,
		};

		return await this.categoryRepository.save(newCategory);
	}

	async findAll() {
		return await this.categoryRepository.find();
	}

	findOne(id: number) {
		return `This action returns a #${id} category`;
	}

	update(id: number, updateCategoryDto: UpdateCategoryDto) {
		return `This action updates a #${id} category`;
	}

	async remove(id: number) {
		return await this.categoryRepository.delete(id);
	}
}
