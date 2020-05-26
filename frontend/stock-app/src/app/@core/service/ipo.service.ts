import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPOListRes, IPOModel, IPORes } from '../model/ipoModel';
import { map } from 'rxjs/operators';

@Injectable()
export class IPOService  {
  constructor(public http: HttpClient) {}
  
  getIPOListData(): Observable<any> {
    const data = this.http
    .get<IPOListRes>('/api/company-svc/company/ipo/listAllIPOs').pipe(
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
    const data = this.http
    .post<IPORes>('/api/ipo-svc/ipo/createOrUpdate', body)
     return data;
  }

  deleteIPO(id: number): Observable<IPORes> {
    const data = this.http
    .delete<IPORes>('/api/ipo-svc/ipo/delete?ipoId=' + id)
     return data;
  }

}
