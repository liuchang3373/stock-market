import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { CompanyService } from '../../../../@core/service/company.service';

@Component({
  selector: 'fsd-bar-chart-comparison',
  templateUrl: './bar-chart-comparison.component.html',
  styleUrls: ['./bar-chart-comparison.component.css']
})
export class BarChartComparisonComponent implements OnInit {

// define the JSON of data
company1: Object[];
company2: Object[];
public title: string;

async ngOnInit()  {
      //this.company1 = this.data1;
      //this.company2 = this.data2;
      this.title = "Price change in weekly"
      console.log("service111: " +  this.company1[0]);
}

getData() {
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

constructor(private service: CompanyService) {
    this.getData();
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
