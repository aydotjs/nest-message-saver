import { IsString, IsNumber } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  full_name: string;
  @IsNumber()
  age: number;
  @IsString()
  date_created: string;
}
