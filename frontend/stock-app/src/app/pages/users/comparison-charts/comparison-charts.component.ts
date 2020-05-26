import { Component, ViewEncapsulation } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { CompanyService } from '../../../@core/service/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyRes, CompanyDto } from '../../../@core/model/companyModel';


@Component({
  selector: 'fsd-comparison-charts',
  templateUrl: './comparison-charts.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ComparisonChartsComponent {
  public companyCode: string;
  constructor(private service: CompanyService, private activateInfo:ActivatedRoute,
    private router:Router){};
  public companyDetailsData: CompanyDto;
  ngOnInit(): void {
    this.activateInfo.queryParams.subscribe(queryParams => {
      this.companyCode = queryParams.companyCode;
      });
    this.service.getCompanyDetailsData(this.companyCode)
    .subscribe(
      (data: CompanyRes)=> { 
        this.companyDetailsData = data.companyDto; 
        //console.log("service: " + JSON.stringify(data));
      },
      err => console.error(err),
      () => console.log('done')
    );
  };


}
