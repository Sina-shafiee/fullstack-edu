import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { AddCourseDto } from './dtos/add-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async getAllCourses() {
    return await this.coursesService.getAll();
  }

  @Post()
  async addCourse(@Body() course: AddCourseDto) {
    try {
      return await this.coursesService.add(course);
    } catch (error) {
      return { msg: error.message };
    }
  }

  @Delete('/:id')
  async deleteCourse(@Param() param: { id: string }) {
    try {
      await this.coursesService.deleteCourse(param.id);
      return { msg: 'success' };
    } catch (error) {
      return { msg: error.message };
    }
  }

  @Put('/:id')
  async updateCourse(
    @Param() param: { id: string },
    @Body() course: AddCourseDto,
  ) {
    try {
      return await this.coursesService.editCourse(param.id, course);
    } catch (error) {
      return { msg: error.message };
    }
  }

  @Get('/byname/:name')
  async findByName(@Param() param: { name: string }) {
    try {
      return await this.coursesService.findByName(param.name);
    } catch (error) {
      return { msg: error.message };
    }
  }
}
