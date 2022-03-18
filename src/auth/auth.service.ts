import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {

    login() {
        return "I am login from service!"
    }

    signup() {
        return { msg: "hello from signup in service" }
    }
}
