import { Injectable } from '@nestjs/common';
import { Courses } from './schema/courses.schema';
import { Error, Model, MongooseError } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AddCourseDto } from './dtos/add-course.dto';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Courses.name) private courseModel: Model<Courses>) {}

  async getAll(): Promise<Courses[]> {
    return this.courseModel.find(
      {},
      {},
      { lean: true, sort: { createdAt: 'desc' } },
    );
  }

  async add(course): Promise<Courses> {
    try {
      return this.courseModel.create(course);
    } catch (error) {
      throw error;
    }
  }

  async deleteCourse(id: string): Promise<Courses> {
    try {
      return this.courseModel.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }

  async editCourse(id: string, course: AddCourseDto): Promise<Courses> {
    try {
      return this.courseModel.findByIdAndUpdate(id, course);
    } catch (error) {
      throw error;
    }
  }

  async findByName(name: string) {
    try {
      return this.courseModel.find({ name: name });
    } catch (error) {
      throw error;
    }
  }
}
