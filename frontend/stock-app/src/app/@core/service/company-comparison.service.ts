import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { CompanyComparisonEntry } from '../model/comparisonCompanyModel';

@Injectable()
export class CompanyComparisonService  {
  constructor(public http: HttpClient) {}
  
  getCompanyComparisonData(): Observable<CompanyComparisonEntry> {
    const data = this.http
    .get<CompanyComparisonEntry>('assets/data/company-comparison-mock-data.json');
     return data;
  }
}
