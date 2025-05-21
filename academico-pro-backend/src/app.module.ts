import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DisciplinesModule } from './disciplines/disciplines.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, DisciplinesModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
