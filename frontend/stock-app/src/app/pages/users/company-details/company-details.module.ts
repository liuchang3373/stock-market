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
  NbAccordionModule
} from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { CompanyDetailsComponent } from './company-details.component';
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { CheckBoxModule  } from '@syncfusion/ej2-angular-buttons';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';


@NgModule({
  imports: [
    ThemeModule,
    NbAccordionModule,
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
    StockChartAllModule,
    CheckBoxModule,
    ComboBoxModule
  ],
  declarations: [
    CompanyDetailsComponent,
    StockChartComponent
  ],
  providers: [ CategoryService, LineSeriesService]
})
export class CompanyDetailsModule { }
