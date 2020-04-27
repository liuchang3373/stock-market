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
import { DashboardComponent } from './dashboard.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CompanyListComponent } from './company-list/company-list.component';

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
	  NbTreeGridModule
  ],
  declarations: [
    DashboardComponent,
	  CompanyListComponent
  ]
})
export class DashboardModule { }
