import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class StockPriceImportService  {
  constructor(public http: HttpClient) {}
  
  getStockPriceImportData(): Observable<any[]> {
    const data = this.http
    .get<any[]>('assets/data/stock-price-mock-data.json');
     return data;
  }
}
