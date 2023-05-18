import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserService } from './user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'frio2389h8u9ifrenui78&/&$/(fmiormi.-.ü+lülüppü12',
    });
  }

  async validate(token: { userId: string }) {
    return await this.userService.validateUser(token);
  }
}
