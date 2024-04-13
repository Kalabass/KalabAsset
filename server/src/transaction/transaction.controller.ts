import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
	Req,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TransactionAuthorGuard } from 'src/guard/transaction.author.guard';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
	constructor(private readonly transactionService: TransactionService) {}

	@Post()
	@UsePipes(new ValidationPipe())
	@UseGuards(JwtAuthGuard)
	create(@Body() createTransactionDto: CreateTransactionDto, @Req() req) {
		return this.transactionService.create(createTransactionDto, +req.user.id);
	}

	@Get()
	@UseGuards(JwtAuthGuard)
	findAll(@Req() req) {
		return this.transactionService.findAll(+req.user.id);
	}

	@Get('pagination')
	@UseGuards(JwtAuthGuard)
	findAllWithPagination(
		@Req() req,
		@Query('page') page: number,
		@Query('limit') limit: number
	) {
		return this.transactionService.findAllWithPagination(
			+req.user.id,
			+page,
			+limit
		);
	}

	@Get(':id')
	@UseGuards(JwtAuthGuard, TransactionAuthorGuard)
	findOne(@Param('id') id: string) {
		return this.transactionService.findOne(+id);
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard, TransactionAuthorGuard)
	update(
		@Param('id') id: string,
		@Body() updateTransactionDto: UpdateTransactionDto
	) {
		return this.transactionService.update(+id, updateTransactionDto);
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard, TransactionAuthorGuard)
	remove(@Param('id') id: string) {
		return this.transactionService.remove(+id);
	}
}
