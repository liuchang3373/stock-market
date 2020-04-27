import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageExchangeComponent } from './manage-exchange/manage-exchange.component';
import { ManageIpoComponent } from './manage-ipo/manage-ipo.component';
import { ManageSectorComponent } from './manage-sector/manage-sector.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { DataConfirmComponent } from './data-confirm/data-confirm.component';


const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'import-data',
      component: ImportDataComponent,
    },
    {
      path: 'data-confirm',
      component: DataConfirmComponent,
    },
    {
      path: 'manage-company',
      component: ManageCompanyComponent,
    },
    {
      path: 'manage-exchange',
      component: ManageExchangeComponent,
    },
    {
      path: 'manage-ipo',
      component: ManageIpoComponent,
    },
    {
      path: 'manage-sector',
      component: ManageSectorComponent,
    },
    {
      path: 'manage-user',
      component: ManageUserComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
