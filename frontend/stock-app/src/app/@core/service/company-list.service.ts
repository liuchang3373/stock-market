import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyModel } from '../model/companyModel';

@Injectable()
export class CompanyListService  {
  constructor(public http: HttpClient) {}
  
  getCompanyListData(): Observable<CompanyModel[]> {
    const data = this.http
    .get<CompanyModel[]>('assets/data/company-list-mock-data.json');
     return data;
  }
}
