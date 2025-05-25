import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UserResponseDto } from '../../users/dto/user-response.dto';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET', { infer: true }) || 'jwtSecret',
    });
  }

  async validate(payload: JwtPayload): Promise<UserResponseDto> {
    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
      name: payload.name,
      password: '',
      cpf: '',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
