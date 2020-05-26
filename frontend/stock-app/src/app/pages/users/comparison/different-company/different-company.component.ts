import { Component, ViewEncapsulation } from '@angular/core';
import { CompanyService } from '../../../../@core/service/company.service';

@Component({
  selector: 'fsd-different-company',
  templateUrl: './different-company.component.html',
  styleUrls: ['./different-company.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DifferentCompanyComponent {
  constructor(private service: CompanyService) {}
  // define the JSON of data
  public companyName: Object[];
 
  public ngOnInit(): void {
    this.service.getCompanyListData().subscribe(result => {
      this.companyName = result.companyListDto
    });
  }

// maps the appropriate column to fields property
public fields: Object = { text: 'companyName', value: 'companyCode' };
// set the placeholder to MultiSelect input element
public waterMark: string = 'Companies';    
// set the type of mode for how to visualized the selected items in input element.
public default : string = 'Box';
}
