import { ResponseModel } from './responseModel';

export class User {
  id: number;
  userName: string;
  passwordHash: string;
  accessLevel: number;
  email: string
  photoUrl: string;
  phoneNumber: string;
  confirmedAndActive: number;
}

export class UserRes extends ResponseModel {
  userDto: User
}

export class UserListRes extends ResponseModel {
  userListDto: User[]
}
