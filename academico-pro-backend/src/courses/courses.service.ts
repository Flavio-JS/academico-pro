import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CourseResponseDto } from './dto/course-response.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCourseDto: CreateCourseDto): Promise<CourseResponseDto> {
    return this.prisma.course.create({
      data: createCourseDto,
    });
  }

  async findAll(): Promise<CourseResponseDto[]> {
    return this.prisma.course.findMany();
  }

  async findOne(id: string): Promise<CourseResponseDto | null> {
    return this.prisma.course.findUnique({
      where: { id },
    });
  }

  async findByCode(code: string): Promise<CourseResponseDto | null> {
    return this.prisma.course.findUnique({
      where: { code },
    });
  }

  async update(id: string, updateCourseDto: UpdateCourseDto): Promise<CourseResponseDto> {
    return this.prisma.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  async remove(id: string): Promise<CourseResponseDto> {
    return this.prisma.course.delete({
      where: { id },
    });
  }
}
