import { IsString, IsEmail, IsNumber, Length, Min, Matches} from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @Length(5, 20)  // Username must be between 5 and 20 characters
  username: string;

  @IsNumber()
  @Min(18)  // Age must be at least 18
  age: number;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 50)  // Password must be between 8 and 50 characters
  @Matches(/^(?=.*[0-9]).*$/, { message: 'Password must contain at least one number' })  // Password must contain at least one number
  password: string;
}

