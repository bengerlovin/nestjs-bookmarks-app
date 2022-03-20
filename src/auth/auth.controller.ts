import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto, TokenResponse } from './dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiCreatedResponse({
    type: TokenResponse,
    description: 'Returns a JWT with a 15 minutes expiration window.',
  })
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @ApiCreatedResponse({
    type: TokenResponse,
    description: 'Returns a JWT with a 15 minutes expiration window.',
  })
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
