import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findAll(): Promise<object> {
    const content = await readFile('messages.json', 'utf-8');
    return JSON.parse(content);
  }

  async findOne(id: string): Promise<string> {
    const content = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(content);

    return messages[id];
  }

  async createMessage(content: string): Promise<string> {
    const res = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(res);

    const id = Math.floor(Math.random() * 9999).toString();
    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));

    return 'Message created' ;
  }
}
