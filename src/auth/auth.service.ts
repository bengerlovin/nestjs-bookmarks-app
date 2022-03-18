import { Injectable } from "@nestjs/common";
import { User, Bookmark } from '@prisma/client'
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService) { }

    login() {
        return "I am login from service!"
    }

    signup() {
        return { msg: "hello from signup in service" }
    }
}
