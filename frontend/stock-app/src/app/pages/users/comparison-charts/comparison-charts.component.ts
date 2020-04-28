import { Component } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { CompanyComparisonService } from '../../../@core/service/company-comparison.service';


@Component({
  selector: 'fsd-comparison-charts',
  templateUrl: './comparison-charts.component.html',
})
export class ComparisonChartsComponent {
  public data1: Object[] = [

    { x: 'Mon', low: 5.7, high: 14.4 }, { x: 'Tue', low: 8.4, high: 16.9 },
    { x: 'Wed', low: 10.6, high: 19.2 },
    { x: 'Thu', low: 8.5, high: 16.1 }, { x: 'Fri', low: 6.0, high: 12.5 },

];
  public data2: Object[] = [

    { x: 'Mon', low: -4.7, high: 11.4 }, { x: 'Tue', low: 6.4, high: 14.4 },
    { x: 'Wed', low: -9.6, high: 17.2 },
    { x: 'Thu', low: 7.5, high: 15.1 }, { x: 'Fri', low: -3.0, high: 10.5 },

];


// define the JSON of data
company1: Object[];
company2: Object[];
public title: string;
public ngOnInit(): void {
      this.company1 = this.data1;
      this.company2 = this.data2;
      this.title = "Apple VS Facebook"
      //console.log("service111: " +  this.company1[0]);
}
constructor(private service: CompanyComparisonService) {
    this.service.getCompanyComparisonData()
    .subscribe(
      (data)=> { 
        this.company1 = data.company1 
        this.company2 = data.company2
        console.log("service: " +  this.company1[0]);
      },
      err => console.error(err),
      () => console.log('done')
    );
}

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
