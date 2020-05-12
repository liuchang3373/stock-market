import { Component, ViewEncapsulation } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { CompanyComparisonService } from '../../../@core/service/company-comparison.service';
import { CompanyDetailsService } from '../../../@core/service/company-details.service';
import { CompanyModel } from '../../../@core/model/companyModel';


@Component({
  selector: 'fsd-comparison-charts',
  templateUrl: './comparison-charts.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ComparisonChartsComponent {
  
  constructor(private service: CompanyDetailsService){};
  public companyDetailsData: CompanyModel;
  ngOnInit(): void {
    this.service.getCompanyDetailsData()
    .subscribe(
      (data: CompanyModel)=> { 
        this.companyDetailsData = data; 
        //console.log("service: " + JSON.stringify(data));
      },
      err => console.error(err),
      () => console.log('done')
    );
  };


}
