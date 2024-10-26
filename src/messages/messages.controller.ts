import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return "listing out all messages"
  }
  @Post()
  createMesaages() {
    return "Creating a message"
  }
  @Get("/:id")
  getMessage() {
    return "getting a message with a particular id"
  }
}
