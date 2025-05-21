import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateTeacherProfileDto } from '../dto/create-teacher-profile.dto';

@Injectable()
export class TeacherProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTeacherProfileDto: CreateTeacherProfileDto) {
    return this.prisma.teacherProfile.create({
      data: createTeacherProfileDto,
    });
  }

  async findByUserId(userId: string) {
    return this.prisma.teacherProfile.findUnique({
      where: { userId },
      include: {
        user: true,
        disciplines: true,
      },
    });
  }
}
