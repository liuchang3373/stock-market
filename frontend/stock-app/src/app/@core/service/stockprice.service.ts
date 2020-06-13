import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CompanyComparisonRes } from '../model/companyModel';
import { environment } from '../../../environments/environment';
import { StockPriceListRes } from '../model/stockModel';



@Injectable()
export class StockPriceService  {
  constructor(public http: HttpClient) {}
  private baseUrl = environment.apiUrl;
  private stockPriceEndpoint = '/stockprice-svc/stockprice';

  private listStockPrice = '/listStockPrice'
  private twoCompanyStock = '/getTwoCompanyStock'
  
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

  getTwoCompanyStock(company1Code, company2Code, pickedDate1, pickedDate2): Observable<CompanyComparisonRes> {
    let url = this.baseUrl + this.stockPriceEndpoint + this.twoCompanyStock
    let param = '?company1Code=' + company1Code + '&company2Code=' + company2Code + '&pickedDate1=' + pickedDate1 + '&pickedDate2=' + pickedDate2
    const data = this.http
    .get<CompanyComparisonRes>(url + param);
     return data;
  }

}
