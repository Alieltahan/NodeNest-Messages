import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {
    return ['Hello', 'Hi', 'Greetings'];
  }

  @Post()
  createMessage() {
    return { message: 'Message created' };
  }

  @Get(':id')
  getMessageById() {
    return { id: 1, message: 'Hello' };
  }
}
