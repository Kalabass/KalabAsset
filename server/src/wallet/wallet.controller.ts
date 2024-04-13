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
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
	constructor(private readonly walletService: WalletService) {}

	@Post()
	@UsePipes(new ValidationPipe())
	@UseGuards(JwtAuthGuard)
	create(@Body() createWalletDto: CreateWalletDto, @Req() req) {
		return this.walletService.create(createWalletDto, +req.user.id);
	}

	@Get()
	@UseGuards(JwtAuthGuard)
	findAll(@Req() req) {
		return this.walletService.findAll(+req.user.id);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.walletService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
		return this.walletService.update(+id, updateWalletDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.walletService.remove(+id);
	}
}
