import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbTreeGridModule,
  NbListModule,
} from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { ComparisonChartsComponent } from './comparison-charts.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
	  NbInputModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    LeafletModule,
    NbTreeGridModule,
    ChartAllModule,
    AccumulationChartAllModule,
    RangeNavigatorAllModule
  ],
  declarations: [
    ComparisonChartsComponent
  ]
})
export class ComparisonChartsModule { }
