import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Author, AuthorSchema} from "./schema/author.schema";


@Module({
  imports:[MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema}])],
  controllers: [AuthorController],
  providers: [AuthorService]
})
export class AuthorModule {}
