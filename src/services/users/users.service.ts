import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {JwtService} from "@nestjs/jwt";
import {User, UserDocument} from "../../shemas/user";
import {UserDto} from "../../dto/user-dto";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
                private jwtService: JwtService) {
        console.log('UserService run')
    }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find();
    }

    async getUserById(id): Promise<User> {
        return this.userModel.findById(id);
    }

    async sendUser(data): Promise<User> {
        //хэширование пароля с помощью функции bcrypt
        //const saltOrRounds = 10;
        //можно использовать соль или количество циклов (я выбрала соль)
        const saltOrRounds = await bcrypt.genSalt();
        const password = data.psw;
        const hash = await bcrypt.hash(password, saltOrRounds);

        data.psw = hash;

        const userData = new this.userModel(data);
        return userData.save();
    }

    async updateUsers(id: string, body): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, body);
    }

    async deleteUsers(): Promise<any> {
        return this.userModel.deleteMany();
    }

    async  deleteUserById(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id);
    }

    async checkAuthUser(login: string, psw: string): Promise<User[]> {
        
        const usersArr = await this.userModel.find({login: login});
        const hash = usersArr[0].psw;
        //сравнение получаемого пароля с хэшированным
        const isMatch = await bcrypt.compare(psw, hash);

        if (isMatch == true) {
            return usersArr;
        } else {
            return null;
        }
        
    }

    async checkRegUser(login: string): Promise<User[]> {
        return this.userModel.find({login: login});
    }

    async login(user: UserDto) {
        const payload = { login: user.login, psw: user.psw };
        const userFromDb = await  this.userModel.find({login: user.login});
        console.log('userFromDb: ', userFromDb);
        return {
            id: userFromDb[0]._id,
            access_token: this.jwtService.sign(payload),
        };
    }
    
}
