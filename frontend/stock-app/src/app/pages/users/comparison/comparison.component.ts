import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router ,NavigationExtras} from '@angular/router';
import { MultiSelectComponent } from '@syncfusion/ej2-angular-dropdowns';
import { CompanyService } from '../../../@core/service/company.service';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'fsd-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})
export class ComparisonComponent{
  @ViewChild('company') 
  companyObject: MultiSelectComponent;
  @ViewChild('companyDate') 
  companyDateObject: CalendarComponent;

  public companyName: Object[];
  public date: Object = new Date();

  constructor( public router:Router, private service: CompanyService) { 
    this.service.getCompanyListData().subscribe(result => {
      this.companyName = result.companyListDto
    });
  }
  
  public ngOnInit(): void {
    
  }

  // maps the appropriate column to fields property
  public fields: Object = { text: 'companyName', value: 'companyCode' };
  // set the placeholder to MultiSelect input element
  public waterMark: string = 'Companies';    
  // set the type of mode for how to visualized the selected items in input element.
  public default : string = 'Box';

  gotoComparisonChart(){
    
    console.log(this.companyObject.value[0]);
    console.log(this.companyObject.value[1]);
    console.log(this.companyDateObject.value.toDateString());

    let navigationExtras: NavigationExtras = {
      queryParams: { 
        'company1Code': this.companyObject.value[0], 
        'company2Code': this.companyObject.value[1],
        'pickedDate1': this.companyDateObject.value.toLocaleDateString(),
        'pickedDate2': this.companyDateObject.value.toLocaleDateString()
    }
    };
    this.router.navigate(['/users/comparison-charts'],navigationExtras);
  }

}
