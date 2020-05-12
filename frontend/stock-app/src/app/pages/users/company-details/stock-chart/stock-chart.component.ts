import { Component, OnInit  } from '@angular/core';
import { CompanyStockService } from '../../../../@core/service/company-stock.service';

@Component({
  selector: 'fsd-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.scss'],
})
export class StockChartComponent implements OnInit{
   public stockchartData: Object[];
   public primaryXAxis: Object;
   public primaryYAxis: Object;
   public title: string;

   ngOnInit(): void {
      this.title = 'APPLE';
      this.primaryXAxis = {
      valueType: 'DateTime'
    };
    console.log("stockchartData: " + this.stockchartData[0]);
  }
  
  constructor(private service: CompanyStockService) {
     this.service.getCompanyStockData()
    .subscribe(
      (data)=> { 
        this.stockchartData = data 
        //console.log("service: " + data[0].date);
      },
      err => console.error(err),
      () => console.log('done')
    );
    
  }
}


