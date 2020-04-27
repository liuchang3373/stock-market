import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf, Observable, } from 'rxjs';
import { SectorModel, SectorChangeModel } from '../model/sectorModel';
import { PeriodsService } from './Periods.service';

@Injectable()
export class SectorListService  {
  constructor(public http: HttpClient) {
   
  }
  getSectorListData(): Observable<SectorModel[]> {
    const data = this.http
    .get<SectorModel[]>('assets/data/sector-list-mock-data.json')
     return data;
  }

  getSectorChangeData(): Observable<SectorChangeModel[]> {
    const data = this.http
    .get<SectorChangeModel[]>('assets/data/sector-change-mock-data.json')
     return data;
  }

  

}
