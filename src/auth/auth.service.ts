import {Injectable, Logger, UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {UsersService} from '../users/users.service';
import {User} from "../users/entities/user.entity";
import {InjectModel} from "@nestjs/sequelize";
import {ConfigService} from "@nestjs/config";


@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User,
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService
    ) {
    }

   async getDatabaseHost(): Promise<string> {
        const nodeNew = this.configService.get<string>('NODE_ENV');
        const taging = this.configService.get<string>('DB_HOST');
        const dbUserName = this.configService.get<string>('DB_USERNAME');
        const dbName = this.configService.get<string>('DB_NAME');
        return `${nodeNew},${taging},${dbUserName},${dbName}`
    }

    async signIn(username: string, pass: string): Promise<any> {
        const userExist = await this.usersService.checkUserExistsByUsername(username);

        if(userExist) {
            const user = await this.usersService.findOne(username);
            const isCorrect = await this.usersService.verifyMd5Hash(pass, user.password)
            if (!isCorrect) {
                return false;
            }


            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const {...result} = user;
            const payload = {username: result.username, sub: result.id};
            const token = this.jwtService.sign(payload);

            return {...result, token};
        } else {
            return false;
        }
    }


    async createUser(data: Partial<User>): Promise<User> {
        const pass = await this.usersService.amd5Hash(data.password);

        // Create a Partial<User> object instead of a full User instance
        const userModel: Partial<User> = {
            username: data.username,
            password: pass,
            email: data.email
        };
        return this.userModel.create(userModel);
    }


}
