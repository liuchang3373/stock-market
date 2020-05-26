import { Component, OnDestroy } from '@angular/core';
import { SectorChangeModel } from '../../../../@core/model/sectorModel';
import { SectorService } from '../../../../@core/service/sector.service';

@Component({
  selector: 'fsd-sector-change',
  templateUrl: './sector-change.component.html',
  styleUrls: ['./sector-change.component.scss']
})
export class SectorChangeComponent {
  sectorChangeData: SectorChangeModel[] = [];
  constructor(private service: SectorService) {
    this.service.getSectorChangeData()
    .subscribe(data => {
      console.log("sector: " + JSON.stringify(data))
      this.sectorChangeData = data;
  });
  }
}
