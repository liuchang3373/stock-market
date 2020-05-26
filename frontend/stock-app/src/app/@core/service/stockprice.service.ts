import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { StockPriceListRes } from '../model/stockModel';



@Injectable()
export class StockPriceService  {
  constructor(public http: HttpClient) {}
  
  getCompanyStockPriceListData(): Observable<any> {
    const data = this.http
    .get<StockPriceListRes>('/api/stockprice-svc/stockprice/listStockPrice?companyCode=500112').pipe(
      // Map through each item in res, and format the object
      map((res) => res.stockPriceListDto.map(item => this.formatDates(item)))
    );
     return data;
  }

  formatDates(results) {
    console.log("stock: " + JSON.stringify(results))
    results.date = new Date(results.date)
    return results;
  }

  getStockPriceImportData(): Observable<any[]> {
    const data = this.http
    .get<any[]>('assets/data/stock-price-mock-data.json');
     return data;
  }

}
