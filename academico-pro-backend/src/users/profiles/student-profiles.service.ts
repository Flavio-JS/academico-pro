import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateStudentProfileDto } from '../dto/create-student-profile.dto';

@Injectable()
export class StudentProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStudentProfileDto: CreateStudentProfileDto) {
    return this.prisma.studentProfile.create({
      data: createStudentProfileDto,
    });
  }

  async findByUserId(userId: string) {
    return this.prisma.studentProfile.findUnique({
      where: { userId },
      include: {
        user: true,
        course: true,
      },
    });
  }
}
