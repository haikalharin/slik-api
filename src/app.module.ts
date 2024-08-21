import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {AuthController} from './auth/auth.controller';
import {AuthService} from './auth/auth.service';
import {JwtModule} from '@nestjs/jwt';
import {ConfigModule} from '@nestjs/config';
import {SequelizeModule} from '@nestjs/sequelize';
import {User} from "./auth/entities/user.entity";
import {Status} from "./auth/entities/status.entity";
import {Experience} from "./auth/entities/experience.entity";
import {UsersService} from "./users/users.service";
import {UserModule} from "./users/users.module";

@Module({
    imports: [
        ConfigModule.forRoot(), // Loads environment variables from .env
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT) || 3306,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            models: [User, Status, Experience], // Add your models here
            autoLoadModels: true,
            synchronize: true, // Automatically creates database tables based on your models
        }),
        JwtModule.register({
            secret: process.env.JWT_SECRET, // Replace with a more secure key in production
            signOptions: {expiresIn: '60m'}, // Token expiration time
        }),
        AuthModule,
        UserModule
    ],
    controllers: [AppController, AuthController],
    providers: [AppService, AuthService],
})
export class AppModule {
}
