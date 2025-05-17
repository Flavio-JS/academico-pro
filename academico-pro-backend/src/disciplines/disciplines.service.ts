import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateDisciplineDto } from './dto/create-discipline.dto';
import { UpdateDisciplineDto } from './dto/update-discipline.dto';
import { DisciplineFilters } from './types/discipline-filters.type';

@Injectable()
export class DisciplinesService {
  constructor(private prisma: PrismaService) {}

  async create(createDisciplineDto: CreateDisciplineDto) {
    return this.prisma.discipline.create({
      data: createDisciplineDto,
    });
  }

  async findAll(filters?: DisciplineFilters) {
    return this.prisma.discipline.findMany({
      where: filters,
      include: {
        course: true,
        professor: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.discipline.findUnique({
      where: { id },
      include: {
        course: true,
        professor: true,
      },
    });
  }

  async update(id: string, updateDisciplineDto: UpdateDisciplineDto) {
    return this.prisma.discipline.update({
      where: { id },
      data: updateDisciplineDto,
    });
  }

  async remove(id: string) {
    return this.prisma.discipline.delete({
      where: { id },
    });
  }
}
