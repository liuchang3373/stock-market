import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { User, UserListRes, UserRes } from '../model/userModel';


@Injectable()
export class UserService  {
  constructor(public http: HttpClient) {}
 

  getUserListData(): Observable<any> {
    const data = this.http
    .get<UserListRes>('/api/user-svc/user/listAllUsers');
     return data;
  }
  
  userLogin(email, password, rememberMe): Observable<String> {
    const data = this.http
    .get<String>('/api/user-svc/login?email=' + email + '&password=' + password + '&remember-me=' + rememberMe)
     return data;
  }

  createOrUpdateUser(body: any): Observable<UserRes> {
    const data = this.http
    .post<UserRes>('/api/user-svc/user/createOrUpdate', body)
     return data;
  }

  deleteUser(id: number): Observable<UserRes> {
    const data = this.http
    .delete<UserRes>('/api/user-svc/user/delete?userId=' + id)
     return data;
  }

}
