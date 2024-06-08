import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Req,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { TargetService } from './target.service';

@Controller('target')
export class TargetController {
	constructor(private readonly targetService: TargetService) {}

	@Post()
	@UsePipes(new ValidationPipe())
	@UseGuards(JwtAuthGuard)
	create(@Body() createTargetDto: CreateTargetDto, @Req() req) {
		return this.targetService.create(createTargetDto, +req.user.id);
	}

	@Get()
	@UsePipes(new ValidationPipe())
	@UseGuards(JwtAuthGuard)
	findAll(@Req() req) {
		return this.targetService.findAll(+req.user.id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateTargetDto: UpdateTargetDto) {
		return this.targetService.update(+id, updateTargetDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.targetService.remove(+id);
	}
}
