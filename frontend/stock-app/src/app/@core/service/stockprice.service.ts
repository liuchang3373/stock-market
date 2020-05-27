import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { StockPriceListRes } from '../model/stockModel';
import { environment } from '../../../environments/environment';



@Injectable()
export class StockPriceService  {
  constructor(public http: HttpClient) {}
  private baseUrl = environment.apiUrl;
  private stockPriceEndpoint = '/stockprice-svc/stockprice';

  private listStockPrice = '/listStockPrice'
  
  
  getCompanyStockPriceListData(companyCode): Observable<any> {
    let url = this.baseUrl + this.stockPriceEndpoint + this.listStockPrice
    let param = '?companyCode=' + companyCode
    const data = this.http
    .get<StockPriceListRes>(url + param).pipe(
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
