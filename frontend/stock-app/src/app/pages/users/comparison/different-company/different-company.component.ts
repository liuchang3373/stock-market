import { Component, ViewEncapsulation } from '@angular/core';
import { CompanyListService } from '../../../../@core/service/company-list.service';

@Component({
  selector: 'fsd-different-company',
  templateUrl: './different-company.component.html',
  styleUrls: ['./different-company.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DifferentCompanyComponent {
  constructor(private service: CompanyListService) {}
  // define the JSON of data
  public companyName: Object[];
 
  public ngOnInit(): void {
    this.service.getCompanyListData().subscribe(result => {
      this.companyName = result
    });
  }

// maps the appropriate column to fields property
public fields: Object = { text: 'CompanyName', value: 'CompanyCode' };
// set the placeholder to MultiSelect input element
public waterMark: string = 'Companies';    
// set the type of mode for how to visualized the selected items in input element.
public default : string = 'Box';
}
