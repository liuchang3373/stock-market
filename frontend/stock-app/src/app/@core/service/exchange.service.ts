import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { ExchangeListRes, ExchangeRes } from '../model/exchangeModel';
import { environment } from '../../../environments/environment';



@Injectable()
export class ExchangeService  {
  constructor(public http: HttpClient) {}
  private baseUrl = environment.apiUrl;
  private exchangeEndpoint = '/exchange-svc/exchange';

  private listAllExchanges = '/listAllExchanges'
  private createOrUpdate = '/createOrUpdate'
  private delete = '/delete'

  getExchangeListData(): Observable<ExchangeListRes> {
    let url = this.baseUrl + this.exchangeEndpoint + this.listAllExchanges
    const data = this.http
    .get<ExchangeListRes>(url);
     return data;
  }

  createOrUpdateExchange(body: any): Observable<ExchangeRes> {
    let url = this.baseUrl + this.exchangeEndpoint + this.createOrUpdate
    const data = this.http
    .post<ExchangeRes>(url, body)
     return data;
  }

  deleteExchange(id: number): Observable<ExchangeRes> {
    let url = this.baseUrl + this.exchangeEndpoint + this.delete
    let param = '?exchangeId=' + id
    const data = this.http
    .delete<ExchangeRes>(url + param)
     return data;
  }

}
