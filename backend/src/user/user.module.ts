import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'frio2389h8u9ifrenui78&/&$/(fmiormi.-.ü+lülüppü12',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [UserService, JwtStrategy, PrismaService],
  exports: [UserService],
})
export class UserModule {}
