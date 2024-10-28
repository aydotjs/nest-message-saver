import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;
  
  @IsString()
  date_created: string;
}
