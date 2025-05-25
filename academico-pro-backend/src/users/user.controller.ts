import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.PROFESSOR, Role.STUDENT)
  @ApiOperation({ summary: 'Get all users' })
  async findAll(): Promise<UserResponseDto[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.PROFESSOR)
  @ApiOperation({ summary: 'Get a user by ID' })
  async findOne(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.findOne(id);
  }

  @Get('email/:email')
  @Roles(Role.ADMIN, Role.PROFESSOR, Role.STUDENT)
  @ApiOperation({ summary: 'Get a user by email' })
  async getByEmail(@Param('email') email: string): Promise<UserResponseDto> {
    return this.usersService.findByEmail(email);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a user' })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user' })
  async remove(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.remove(id);
  }
}
