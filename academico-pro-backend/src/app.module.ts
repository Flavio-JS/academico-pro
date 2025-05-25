import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { DisciplinesModule } from './disciplines/disciplines.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/user.modules';

@Module({
  imports: [PrismaModule, DisciplinesModule, CoursesModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
