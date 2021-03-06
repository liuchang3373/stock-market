import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbAccordionModule
} from '@nebular/theme';
import { CompanyDetailsComponent } from './company-details.component';
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts';




@NgModule({
  imports: [
    NbAccordionModule,
    NbCardModule,
    ChartAllModule, 
    StockChartAllModule
  ],
  declarations: [
    CompanyDetailsComponent
  ],
  providers: [ CategoryService, LineSeriesService]
})
export class CompanyDetailsModule { }
