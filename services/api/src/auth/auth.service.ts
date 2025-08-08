import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async signup(email: string) {
    const user = await (this.prisma as any).user.create({ data: { email } });
    const token = await this.jwt.signAsync({ sub: user.id });
    return { user, token };
  }
}
