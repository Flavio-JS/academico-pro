import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { DisciplinesModule } from './disciplines/disciplines.module';
import { EmailModule } from './email/email.module';
import { CorsMiddleware } from './middlewares/cors.middleware';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [PrismaModule, DisciplinesModule, CoursesModule, UsersModule, AuthModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
