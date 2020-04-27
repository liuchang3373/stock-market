import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { CompanyModel } from '../model/companyModel';

@Injectable()
export class CompanyDetailsService  {
  constructor(public http: HttpClient) {}
  
  getCompanyDetailsData(): Observable<CompanyModel> {
    const data = this.http
    .get<CompanyModel>('assets/data/company-detail-mock-data.json')
     return data;
  }
}
