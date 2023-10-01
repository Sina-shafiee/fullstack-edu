import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { AddAuthorDto } from './dto/add-author.dto';

@Controller('author')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Get()
  async getAuthors() {
    try {
      return this.authorService.getAll();
    } catch (error) {
      return { msg: error.message };
    }
  }

  @Post()
  async addAuthor(@Body() author: AddAuthorDto) {
    try {
      return this.authorService.add(author);
    } catch (error) {
      return error;
    }
  }

  @Put('/:id')
  async editAuthor(
    @Param() { id }: { id: string },
    @Body() author: AddAuthorDto,
  ) {
    try {
      return this.authorService.edit(id, author);
    } catch (error) {
      return error;
    }
  }

  @Delete('/:id')
  async deleteAuthor(@Param() { id }: { id: string }) {
    try {
      return this.authorService.delete(id);
    } catch (error) {
      return error;
    }
  }

  @Get('/:id')
  async findById(@Param() { id }: { id: string }) {
    try {
      return this.authorService.findById(id);
    } catch (error) {
      return error;
    }
  }
}
