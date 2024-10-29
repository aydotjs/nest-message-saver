import { IsString, IsEmail, IsNumber } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  username: string;
  @IsNumber()
  age: number;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
