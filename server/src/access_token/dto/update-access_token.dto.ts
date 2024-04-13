import { PartialType } from '@nestjs/mapped-types';
import { CreateAccessTokenDto } from './create-access_token.dto';

export class UpdateAccessTokenDto extends PartialType(CreateAccessTokenDto) {}
