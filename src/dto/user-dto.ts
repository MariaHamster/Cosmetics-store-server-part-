import {IUser} from "../interfaces/user";

export class UserDto implements IUser {
    psw: string;
    login: string;
    id: string;
}