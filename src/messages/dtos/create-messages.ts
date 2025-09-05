import { IsString } from 'class-validator';

export class CreateMessagesDto {
  @IsString()
  readonly content: string;
}
