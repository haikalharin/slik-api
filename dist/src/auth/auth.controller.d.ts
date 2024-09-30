import { AuthService } from './auth.service';
import { User } from "./entities/user.entity";
import { UsersService } from "../users/users.service";
export declare class AuthController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(signInDto: Record<string, any>): Promise<{
        status: string;
        statusCode: number;
        data: any;
    }>;
    create(createUserDto: Partial<User>): Promise<User | {
        status: string;
        statusCode: number;
        data: {
            message: string;
        };
    }>;
    findAll(): Promise<User[]>;
    getEnv(): Promise<String>;
}
