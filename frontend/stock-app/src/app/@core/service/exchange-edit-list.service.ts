import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { ExchangeModel } from '../model/exchangeModel';



@Injectable()
export class ExchangeEditListService  {
  constructor(public http: HttpClient) {}

  getExchangeEditListData(): Observable<ExchangeModel[]> {
    const data = this.http
    .get<ExchangeModel[]>('assets/data/exchange-list-mock-data.json');
     return data;
  }
}
