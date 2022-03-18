import { ForbiddenException, Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async login(dto: AuthDto) {
    // find user by email
    const user = await this.prismaService.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if user doesn't exist, throw exception
    if (!user) throw new ForbiddenException("Credentials don't match");

    // compare password, if no match, return error
    const doPasswordsMatch = await argon.verify(user.hash, dto.password);

    if (!doPasswordsMatch) throw new ForbiddenException("Credentails don't match");

    delete user.hash;

    return user;
  }

  async signup(dto: AuthDto) {
    // hash password
    const hash = await argon.hash(dto.password);

    // save new user
    try {
      const user = await this.prismaService.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });
      // remove hash from return object
      delete user.hash;

      // return new user
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }
}
