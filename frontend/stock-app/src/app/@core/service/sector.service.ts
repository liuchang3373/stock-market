import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf, Observable, } from 'rxjs';
import { SectorModel, SectorChangeModel, SectorListRes, SectorRes} from '../model/sectorModel';
import { environment } from '../../../environments/environment';

@Injectable()
export class SectorService  {
  constructor(public http: HttpClient) {
   
  }
  private baseUrl = environment.apiUrl;
  private sectorEndpoint = '/sector-svc/sector';

  private listAllSectors = '/listAllSectors'
  private createOrUpdate = '/createOrUpdate'
  private delete = '/delete'

  getSectorListData(): Observable<any> {
    let url = this.baseUrl + this.sectorEndpoint + this.listAllSectors
    const data = this.http
    .get<SectorListRes>(url)
     return data;
  }

  getSectorChangeData(): Observable<SectorChangeModel[]> {
    const data = this.http
    .get<SectorChangeModel[]>('assets/data/sector-change-mock-data.json')
     return data;
  }

  createOrUpdateSector(body: any): Observable<SectorRes> {
    let url = this.baseUrl + this.sectorEndpoint + this.createOrUpdate
    const data = this.http
    .post<SectorRes>(url, body)
     return data;
  }

  deleteSector(id: number): Observable<SectorRes> {
    let url = this.baseUrl + this.sectorEndpoint + this.delete
    let param = '?sectorId=' + id
    const data = this.http
    .delete<SectorRes>(url + param)
     return data;
  }
}
