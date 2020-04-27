import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { delay, map } from 'rxjs/operators';



@Injectable()
export class CompanyStockService  {
  constructor(public http: HttpClient) {}
  
  getCompanyStockData(): Observable<any[]> {
    const data = this.http
    .get<any[]>('assets/data/company-stock-mock-data.json').pipe(
      // Map through each item in res, and format the object
      map((res) => res.map(item => this.formatDates(item)))
    );
     return data;
  }

  formatDates(results) {
    results.date = new Date(results.date)
    return results;
  }

}
