import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
 @Get()
 sayHello(){
    return "Yo whats up"
 }
}
