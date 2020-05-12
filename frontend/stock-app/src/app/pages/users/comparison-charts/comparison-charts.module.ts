import { NgModule } from '@angular/core';
import {
  NbCardModule,
} from '@nebular/theme';
import { ComparisonChartsComponent } from './comparison-charts.component';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { BarChartComparisonComponent } from './bar-chart-comparison/bar-chart-comparison.component';


@NgModule({
  imports: [
    NbCardModule,
    ChartAllModule,
    AccumulationChartAllModule,
    RangeNavigatorAllModule
  ],
  declarations: [
    ComparisonChartsComponent, BarChartComparisonComponent
  ]
})
export class ComparisonChartsModule { }
