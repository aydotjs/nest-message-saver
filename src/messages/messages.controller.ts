import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from 'src/dtos/create-message.dto';
@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return "listing out all messages"
  }
  @Post()
  createMesaages(@Body() body:CreateMessageDto) {
    console.log(body);
    return "Creating a message"
  }
  @Get("/:id")
  getMessage(@Param("id") id:string) {
    console.log(id);
    return "getting a message with a particular id"
  }
}
