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

import { DashboardComponent } from './dashboard.component';
import { ThemeModule } from '../../../@theme/theme.module';



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

	  NbTreeGridModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
