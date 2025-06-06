import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { EmailService } from 'src/email/email.service';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserDto } from './dto/create-user.dto';
import { PaginatedUsersResponseDto } from './dto/paginated-users-response.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { PrismaUserType } from './types/prisma-user.type';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
  ) {}

  private hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const hashedPassword = await this.hashPassword(createUserDto.password);

    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });

    await this.sendWelcomeEmail(user.email, createUserDto.password);

    return this.mapToDto(user);
  }

  private async sendWelcomeEmail(email: string, temporaryPassword: string): Promise<void> {
    const loginUrl = `${process.env.FRONTEND_URL}`;
    const subject = 'Bem-vindo ao Academico Pro - Sua conta foi criada';
    const html = `
      <h1>Bem-vindo ao Academico Pro!</h1>
      <p>Sua conta foi criada com sucesso.</p>
      <p>Para acessar o sistema, utilize as seguintes credenciais:</p>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Senha temporária:</strong> ${temporaryPassword}</li>
      </ul>
      <p>Por segurança, recomendamos que você altere sua senha temporária após o primeiro login.</p>
      <p><a href="${loginUrl}">Clique aqui para acessar o sistema</a></p>
      <p>Atenciosamente,<br>Equipe Academico Pro</p>
    `;

    await this.emailService.sendEmail({
      to: email,
      subject,
      html,
    });
  }

  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => this.mapToDto(user));
  }

  async findAllPaginated({
    page,
    limit,
    search,
    filter,
  }: {
    page: number;
    limit: number;
    search?: string;
    filter?: 'all' | 'active' | 'inactive' | Role;
  }): Promise<PaginatedUsersResponseDto> {
    const where: Prisma.UserWhereInput = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { cpf: { contains: search } },
      ];
    }

    if (filter && filter !== 'all') {
      if (filter === 'active') {
        where.isActive = true;
      } else if (filter === 'inactive') {
        where.isActive = false;
      } else {
        where.role = filter;
      }
    }

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      data: users.map((user) => this.mapToDto(user)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return this.mapToDto(user);
  }

  async findByEmail(email: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return this.mapToDto(user);
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto | Partial<UpdateUserDto>,
  ): Promise<UserResponseDto> {
    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    return this.mapToDto(user);
  }

  async remove(id: string): Promise<void> {
    try {
      // Primeiro verifica se o usuário existe
      const user = await this.prisma.user.findUnique({
        where: { id },
      });

      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      // Se o usuário existe, procede com a exclusão
      await this.prisma.user.delete({
        where: { id },
      });
    } catch (error) {
      // Trata erros específicos do Prisma
      if (error.code === 'P2025') {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      throw error;
    }
  }

  private mapToDto(user: PrismaUserType): UserResponseDto {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      cpf: user.cpf,
      role: user.role,
      isActive: user.isActive,
      avatarUrl: user.avatarUrl,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
