import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { DisciplinesController } from './disciplines.controller';
import { DisciplinesService } from './disciplines.service';

@Module({
  controllers: [DisciplinesController],
  providers: [DisciplinesService, PrismaService],
  exports: [DisciplinesService],
})
export class DisciplinesModule {}
