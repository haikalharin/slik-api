import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import {User} from "../auth/entities/user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User,
    ) {}
    async findOne(username: string): Promise<User | undefined> {
        return this.userModel.findOne({
            where: {
                username: username, // or simply { username }
            },
        });
    }


    async createUser(data: Partial<User>): Promise<User> {
        return this.userModel.create(data);
    }

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    // create(createUserDto: CreateUserDto) {
    //   return 'This action adds a new user';
    // }
    //
    // findAll() {
    //   return `This action returns all user`;
    // }


    // update(id: number, updateUserDto: UpdateUserDto) {
    //   return `This action updates a #${id} user`;
    // }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
