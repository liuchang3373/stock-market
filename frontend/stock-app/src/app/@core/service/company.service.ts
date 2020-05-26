import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyListRes, CompanyRes, CompanyComparisonRes } from '../model/companyModel';
import { environment } from '../../../environments/environment';

@Injectable()
export class CompanyService  {
  constructor(public http: HttpClient) {}
  private baseUrl = environment.apiUrl;
  private companyEndpoint = '/company-svc/company';

  private listAllCompanies = '/listAllCompanies'
  private getCompanyByCode = '/getCompanyByCode'
  private createOrUpdate = '/createOrUpdate'
  private delete = '/delete'
  
  getCompanyListData(): Observable<CompanyListRes> {
    let url = this.baseUrl + this.companyEndpoint + this.listAllCompanies
    const data = this.http
    .get<CompanyListRes>(url);
     return data;
  }

  getCompanyDetailsData(companyCode): Observable<CompanyRes> {
    let url = this.baseUrl + this.companyEndpoint + this.getCompanyByCode
    let param = '?companyCode=' + companyCode
    const data = this.http
    .get<CompanyRes>(url + param);
     return data;
  }

  getCompanyComparisonData(): Observable<CompanyComparisonRes> {
    const data = this.http
    .get<CompanyComparisonRes>('assets/data/company-comparison-mock-data.json');
     return data;
  }

  createOrUpdateExchange(body: any): Observable<CompanyRes> {
    let url = this.baseUrl + this.companyEndpoint + this.createOrUpdate
    const data = this.http
    .post<CompanyRes>(url, body)
     return data;
  }

  deleteExchange(id: number): Observable<CompanyRes> {
    let url = this.baseUrl + this.companyEndpoint + this.delete
    let param = '?companyId=' + id
    const data = this.http
    .delete<CompanyRes>(url + param)
     return data;
  }

}
