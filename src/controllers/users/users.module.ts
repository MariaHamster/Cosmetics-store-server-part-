import { Module } from '@nestjs/common';
import {UsersController} from "./users.controller";
import {UsersService} from "../../services/users/users.service";
import {User, UserSchema} from "../../shemas/user";
import {jwtConstants} from "../../static/private/constants";
import {JwtModule} from "@nestjs/jwt";
import {MongooseModule} from "@nestjs/mongoose";
import {PassportModule} from "@nestjs/passport";
import {JwtStrategyService} from "../../services/authentication/jwt-strategy/jwt-strategy.service";
import {AuthService} from "../../services/auth/auth.service";

@Module({
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret
        }),
    ],
    controllers: [UsersController],
    providers: [UsersService, AuthService, JwtStrategyService],
})
export class UsersModule {}
