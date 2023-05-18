import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AppService } from 'src/app.service';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { UserRequest } from 'src/types';

@Controller('user')
export class UserController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getTest(@Request() request: UserRequest): {
    email: string;
    apiToken: string;
  } {
    const { email, apiToken } = request.user;
    return { email, apiToken };
  }

  @Post('login')
  async login(
    @Body() postData: { email: string; password: string },
  ): Promise<string> {
    return await this.userService.login(postData);
  }

  @Post('register')
  async register(
    @Body() postData: { email: string; password: string },
  ): Promise<string> {
    return await this.userService.register({ ...postData, apiToken: null });
  }
}
