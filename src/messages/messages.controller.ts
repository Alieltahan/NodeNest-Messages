import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessagesDto } from './dtos';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {
  }

  @Get()
  getMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessagesDto) {
    return this.messagesService.createMessage(body.content);
  }

  @Get('/:id')
  async getMessageById(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if(!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}
