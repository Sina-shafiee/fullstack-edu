import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type authorDocument = HydratedDocument<Author>;

@Schema()
export class Author {
  @Prop()
  name: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
