import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyListRes, CompanyRes, CompanyComparisonRes } from '../model/companyModel';

@Injectable()
export class CompanyService  {
  constructor(public http: HttpClient) {}
  private baseUrl = '/api';
  private companyEndpoint = '/company-svc/company';
  private listAllCompanies = '/listAllCompanies'
  
  getCompanyListData(): Observable<CompanyListRes> {
    let url = this.baseUrl + this.companyEndpoint + this.listAllCompanies
    const data = this.http
    .get<CompanyListRes>(url);
     return data;
  }

  getCompanyDetailsData(companyCode): Observable<CompanyRes> {
    const data = this.http
    .get<CompanyRes>('/api/company-svc/company/getCompanyByCode?companyCode=' + companyCode);
     return data;
  }

  getCompanyComparisonData(): Observable<CompanyComparisonRes> {
    const data = this.http
    .get<CompanyComparisonRes>('assets/data/company-comparison-mock-data.json');
     return data;
  }

  createOrUpdateExchange(body: any): Observable<CompanyRes> {
    const data = this.http
    .post<CompanyRes>('/api/company-svc/company/createOrUpdate', body)
     return data;
  }

  deleteExchange(id: number): Observable<CompanyRes> {
    const data = this.http
    .delete<CompanyRes>('/api/company-svc/company/delete?companyId=' + id)
     return data;
  }

}
