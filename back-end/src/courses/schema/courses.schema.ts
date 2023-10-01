import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type courseDocument = HydratedDocument<Courses>;

@Schema()
export class Courses {
  @Prop()
  name: string;

  @Prop()
  author: string;

  @Prop()
  tag: string[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Courses);
