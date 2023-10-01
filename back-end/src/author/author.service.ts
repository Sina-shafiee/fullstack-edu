import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from './schema/author.schema';
import { AddAuthorDto } from './dto/add-author.dto';

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author.name) private authorModel: Model<Author>) {}

  async getAll(): Promise<Author[]> {
    try {
      return this.authorModel.find(
        {},
        {},
        { lean: true, sort: { createdAt: 'desc' } },
      );
    } catch (error) {
      throw error;
    }
  }

  async add(author: AddAuthorDto): Promise<Author> {
    try {
      return this.authorModel.create(author);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<Author[]> {
    try {
      return this.authorModel.findByIdAndDelete(id, { new: false });
    } catch (error) {
      throw error;
    }
  }

  async edit(id: string, author: AddAuthorDto): Promise<Author[]> {
    try {
      return this.authorModel.findByIdAndUpdate(id, author);
    } catch (error) {
      throw error;
    }
  }

  async findById(id: string) {
    try {
      return this.authorModel.find({ _id: id });
    } catch (error) {
      throw error;
    }
  }
}
