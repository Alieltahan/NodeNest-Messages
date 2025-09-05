import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public readonly messagesRepository: MessagesRepository) {}
  findAll() {
    return this.messagesRepository.findAll();
  }
  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  createMessage(content: string) {
    return this.messagesRepository.createMessage(content);
  }
}
