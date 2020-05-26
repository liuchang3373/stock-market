import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf, Observable, } from 'rxjs';
import { SectorModel, SectorChangeModel, SectorListRes, SectorRes} from '../model/sectorModel';

@Injectable()
export class SectorService  {
  constructor(public http: HttpClient) {
   
  }
  getSectorListData(): Observable<any> {
    const data = this.http
    .get<SectorListRes>('/api/sector-svc/sector/listAllSectors')
     return data;
  }

  getSectorChangeData(): Observable<SectorChangeModel[]> {
    const data = this.http
    .get<SectorChangeModel[]>('assets/data/sector-change-mock-data.json')
     return data;
  }

  createOrUpdateSector(body: any): Observable<SectorRes> {
    const data = this.http
    .post<SectorRes>('/api/sector-svc/sector/createOrUpdate', body)
     return data;
  }

  deleteSector(id: number): Observable<SectorRes> {
    const data = this.http
    .delete<SectorRes>('/api/sector-svc/sector/delete?sectorId=' + id)
     return data;
  }
}
