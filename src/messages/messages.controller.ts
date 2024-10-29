import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from 'src/dtos/create-message.dto';
import { RegisterUserDto } from 'src/dtos/register-user-dto';
@Controller()
export class MessagesController {
  @Get()
  listMessages() {
    return "listing out all messages"
  }
  @Post("/messages")
  createMesaages(@Body() body:CreateMessageDto) {
    console.log(body);
    return "Creating a message"
  }
  @Post("/register")
  regiterUser(@Body() body:RegisterUserDto) {
    console.log(body);
    return "Creating a user"
  }
  @Get("/:id")
  getMessage(@Param("id") id:string) {
    console.log(id);
    return "getting a message with a particular id"
  }
}
