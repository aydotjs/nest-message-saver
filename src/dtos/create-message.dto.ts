import { IsString, IsNumber } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  title: string;

  @IsString()
  author: string;
}
