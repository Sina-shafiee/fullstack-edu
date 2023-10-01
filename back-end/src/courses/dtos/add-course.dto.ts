import { IsString, IsArray } from 'class-validator';

export class AddCourseDto {
  @IsString()
  name: string;
  @IsString()
  author: object;
  @IsArray()
  tag: string[];
}
