import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from "./entities/user.entity";
import { ConfigService } from "@nestjs/config";
export declare class AuthService {
    private readonly userModel;
    private usersService;
    private jwtService;
    private configService;
    private readonly logger;
    constructor(userModel: typeof User, usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    getDatabaseHost(): Promise<string>;
    signIn(username: string, pass: string): Promise<any>;
    createUser(data: Partial<User>): Promise<User>;
}
