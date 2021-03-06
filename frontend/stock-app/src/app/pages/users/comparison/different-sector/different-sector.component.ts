import { Component, ViewEncapsulation } from '@angular/core';
import { SectorService } from '../../../../@core/service/sector.service';

@Component({
  selector: 'fsd-different-sector',
  templateUrl: './different-sector.component.html',
  styleUrls: ['./different-sector.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DifferentSectorComponent {
  constructor(private service: SectorService) {}
  // define the JSON of data
  public sectorName: Object[];
 
  public ngOnInit(): void {
    this.service.getSectorListData().subscribe(result => {
      this.sectorName = result.sectorListDto
    });
  }

// maps the appropriate column to fields property
public fields: Object = { text: 'sectorName', value: 'id' };
// set the placeholder to MultiSelect input element
public waterMark: string = 'Sectors';    
// set the type of mode for how to visualized the selected items in input element.
public default : string = 'Box';
}
