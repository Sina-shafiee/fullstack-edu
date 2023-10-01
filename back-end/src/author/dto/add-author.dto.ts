import { IsString } from 'class-validator';

export class AddAuthorDto {
  @IsString()
  name: string;
}
