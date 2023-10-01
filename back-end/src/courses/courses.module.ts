import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import {Courses, CourseSchema} from "./schema/courses.schema";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports:[MongooseModule.forFeature([{ name: Courses.name, schema: CourseSchema }])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
