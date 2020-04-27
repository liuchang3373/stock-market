import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { User } from '../model/userModel';


@Injectable()
export class UserService  {
  constructor(public http: HttpClient) {}
  private time: Date = new Date;

  getUserListData(): Observable<User[]> {
    const data = this.http
    .get<User[]>('assets/data/user-list-mock-data.json');
     return data;
  }
}
