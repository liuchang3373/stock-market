import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UsersComponent } from './users.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CompanyDetailsModule } from './company-details/company-details.module';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  imports: [
    UsersRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
	CompanyDetailsModule
  ],
  declarations: [
    UsersComponent,
  ],
})
export class UsersModule {
}
