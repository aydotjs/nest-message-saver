import { IsString, IsNumber } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  title: string;

  @IsString()
  date_created: string;
}
