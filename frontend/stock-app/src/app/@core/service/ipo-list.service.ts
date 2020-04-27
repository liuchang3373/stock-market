import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPOModel } from '../model/ipoModel';
import { map } from 'rxjs/operators';

@Injectable()
export class IPOListService  {
  constructor(public http: HttpClient) {}
  
  getIPOListData(): Observable<IPOModel[]> {
    const data = this.http
    .get<IPOModel[]>('assets/data/ipo-list-mock-data.json').pipe(
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
