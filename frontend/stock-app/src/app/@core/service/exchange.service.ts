import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { ExchangeListRes, ExchangeRes } from '../model/exchangeModel';



@Injectable()
export class ExchangeService  {
  constructor(public http: HttpClient) {}

  getExchangeListData(): Observable<ExchangeListRes> {
    const data = this.http
    .get<ExchangeListRes>('/api/exchange-svc/exchange/listAllExchanges');
     return data;
  }

  createOrUpdateExchange(body: any): Observable<ExchangeRes> {
    const data = this.http
    .post<ExchangeRes>('/api/exchange-svc/exchange/createOrUpdate', body)
     return data;
  }

  deleteExchange(id: number): Observable<ExchangeRes> {
    const data = this.http
    .delete<ExchangeRes>('/api/exchange-svc/exchange/delete?exchangeId=' + id)
     return data;
  }

}
