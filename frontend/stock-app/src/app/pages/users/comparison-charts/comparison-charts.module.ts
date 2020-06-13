import { NgModule } from '@angular/core';
import {
  NbCardModule,
} from '@nebular/theme';
import { ComparisonChartsComponent } from './comparison-charts.component';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';



@NgModule({
  imports: [
    NbCardModule,
    ChartAllModule,
    AccumulationChartAllModule,
    RangeNavigatorAllModule
  ],
  declarations: [
    ComparisonChartsComponent
  ]
})
export class ComparisonChartsModule { }
