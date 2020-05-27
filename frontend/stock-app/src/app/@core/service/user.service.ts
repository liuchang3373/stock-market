import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { User, UserListRes, UserRes } from '../model/userModel';
import { environment } from '../../../environments/environment';


@Injectable()
export class UserService  {
  constructor(public http: HttpClient) {}
  private baseUrl = environment.apiUrl;
  private userEndpoint = '/user-svc/user';

  private listAllUsers = '/listAllUsers'
  private createOrUpdate = '/createOrUpdate'
  private delete = '/delete'

  getUserListData(): Observable<any> {
    let url = this.baseUrl + this.userEndpoint + this.listAllUsers
    const data = this.http
    .get<UserListRes>(url);
     return data;
  }
  
  createOrUpdateUser(body: any): Observable<UserRes> {
    let url = this.baseUrl + this.userEndpoint + this.createOrUpdate
    const data = this.http
    .post<UserRes>(url, body)
     return data;
  }

  deleteUser(id: number): Observable<UserRes> {
    let url = this.baseUrl + this.userEndpoint + this.delete
    let param = '?userId=' + id
    const data = this.http
    .delete<UserRes>(url + param)
     return data;
  }

}
