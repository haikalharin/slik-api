import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {AuthController} from './auth/auth.controller';
import {AuthService} from './auth/auth.service';
import {JwtModule} from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {SequelizeModule} from '@nestjs/sequelize';

import {UserModule} from "./users/users.module";
import {User} from "./auth/entities/user.entity";

@Module({
    imports: [
        // Loads environment variables from .env
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.NODE_ENV}` || '.env', // Dynamically load env file
            isGlobal: true, // Make the configuration global
        }),

        // Example of using ConfigModule with Sequelize
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],  // Import ConfigModule
            inject: [ConfigService],  // Inject ConfigService
            useFactory: (configService: ConfigService) => ({
                dialect: 'mysql',
                host: configService.get('DATABASE_HOST'),
                port: +configService.get<number>('DATABASE_PORT'),
                username: configService.get('DATABASE_USERNAME'),
                password: configService.get('DATABASE_PASSWORD'),
                database: configService.get('DATABASE_NAME'),
                autoLoadModels: true,
                synchronize: true, // Set to false in production
            }),
        }),

        JwtModule.register({
            secret: process.env.JWT_SECRET, // Replace with a more secure key in production
            signOptions: {expiresIn: '60m'}, // Token expiration time
        }),
        AuthModule,
        UserModule,
    ],
    controllers: [AppController, AuthController],
    providers: [AppService, AuthService],
})
export class AppModule {
}
