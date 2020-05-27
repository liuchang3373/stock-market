import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPOListRes, IPOModel, IPORes } from '../model/ipoModel';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class IPOService  {
  constructor(public http: HttpClient) {}
  private baseUrl = environment.apiUrl;
  private ipoEndpoint = '/company-svc/company/ipo';

  private listAllIPOs = '/listAllIPOs'
  private createOrUpdate = '/createOrUpdate'
  private delete = '/delete'
  
  getIPOListData(): Observable<any> {
    let url = this.baseUrl + this.ipoEndpoint + this.listAllIPOs
    const data = this.http
    .get<IPOListRes>(url).pipe(
      // Map through each item in res, and format the object
      map((res) => res.ipoListDto.map(item => this.formatDates(item)))
    );
     return data;
  }

  formatDates(results) {
    results.date = new Date(results.date)
    return results;
  }

  createOrUpdateIPO(body: any): Observable<IPORes> {
    let url = this.baseUrl + this.ipoEndpoint + this.createOrUpdate
    const data = this.http
    .post<IPORes>(url, body)
     return data;
  }

  deleteIPO(id: number): Observable<IPORes> {
    let url = this.baseUrl + this.ipoEndpoint + this.delete
    let param = '?ipoId=' + id
    const data = this.http
    .delete<IPORes>(url + param)
     return data;
  }

}
