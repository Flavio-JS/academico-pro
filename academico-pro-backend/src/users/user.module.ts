import { Module } from '@nestjs/common';
import { EmailModule } from 'src/email/email.module';

import { CoursesModule } from '../courses/courses.module';
import { PrismaModule } from '../prisma/prisma.module';
import { StudentProfilesService } from './profiles/student-profiles.service';
import { TeacherProfilesService } from './profiles/teacher-profiles.service';
import { UsersController } from './user.controller';
import { UsersService } from './users.service';

@Module({
  imports: [PrismaModule, CoursesModule, EmailModule],
  controllers: [UsersController],
  providers: [UsersService, StudentProfilesService, TeacherProfilesService],
  exports: [UsersService],
})
export class UsersModule {}
