import { Component, ViewEncapsulation } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { CompanyService } from '../../../@core/service/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyRes, CompanyDto } from '../../../@core/model/companyModel';
import { StockPriceService } from '../../../@core/service/stockPrice.service';


@Component({
  selector: 'fsd-comparison-charts',
  templateUrl: './comparison-charts.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ComparisonChartsComponent {
  public company1Code: string;
  public company2Code: string;
  public pickedDate1: Date;
  public pickedDate2: Date;

  public company1DetailsData: CompanyDto;
  public company2DetailsData: CompanyDto;
  // define the JSON of data
  company1: Object[];
  company2: Object[];
  public title: string;

  constructor(private companyservice: CompanyService, private stockPriceService: StockPriceService, private activateInfo:ActivatedRoute,
    private router:Router){
      this.activateInfo.queryParams.subscribe(queryParams => {
        this.company1Code = queryParams.company1Code;
        this.company2Code = queryParams.company2Code;
        this.pickedDate1 = new Date(queryParams.pickedDate1);
        this.pickedDate2 = new Date(queryParams.pickedDate2);
        });
      console.log("pickedDate1: " +  this.convertToDate(this.pickedDate1));
      this.stockPriceService.getTwoCompanyStock(this.company1Code, this.company2Code, this.convertToDate(this.pickedDate1), this.convertToDate(this.pickedDate2))
      .subscribe(
        (data)=> { 
          console.log("stockPriceService: " +  JSON.stringify(data));
          this.company1 = data.company1
          console.log("company1: " +  JSON.stringify(this.company1));
          this.company2 = data.company2
          console.log("company2: " +  JSON.stringify(this.company2));
        },
        err => console.error(err),
        () => console.log('stockPriceService done')
      );
    };
  
  convertToDate(date: Date): String {
    let year = date.getFullYear();
    let month = date.getUTCMonth() + 1;
    let newMonth: string;
    let newDay: string;
    if(month < 10) {
      newMonth = '0' + month; 
    }
    let day = date.getDate();
    if(day < 10) {
      newDay = '0' + day; 
    }
    return year + '-' + newMonth + '-' + newDay
  }

  ngOnInit(): void {
    this.companyservice.getCompanyDetailsData(this.company1Code)
    .subscribe(
      (data: CompanyRes)=> { 
        console.log("service1=====: " + JSON.stringify(data));
        this.company1DetailsData = data.companyDto; 
        
      },
      err => console.error(err),
      () => console.log('done')
    );
    this.companyservice.getCompanyDetailsData(this.company2Code)
    .subscribe(
      (data: CompanyRes)=> { 
        console.log("service2=====: " + JSON.stringify(data));
        this.company2DetailsData = data.companyDto; 
        
      },
      err => console.error(err),
      () => console.log('done')
    );
    this.title = "Price change in weekly"
  };
  public chartArea: Object = {
    border: {
        width: 0
    }
};
public width: string =  '100%'
//Initializing Primary X Axis
public primaryXAxis: Object = {
    valueType: 'Category',
    majorGridLines: { width: 0 }
};
//Initializing Primary Y Axis
public primaryYAxis: Object = {
    labelFormat: '{value}%',
    maximum: 20,
    edgeLabelPlacement: 'Shift',
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 }
};
//Initializing Chart Title

public tooltip: Object = {
    enable: true
};
 // custom code start
public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
};

}
