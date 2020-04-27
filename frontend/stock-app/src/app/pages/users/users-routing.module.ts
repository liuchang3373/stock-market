import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { ComparisonChartsComponent } from './comparison-charts/comparison-charts.component';
import { IpoComponent } from './ipo/ipo.component';
import { IpoDetailsComponent } from './ipo-details/ipo-details.component';
import { ProfileComponent } from './profile/profile.component';
import { SectorComponent } from './sector/sector.component';
import { SectorDetailsComponent } from './sector-details/sector-details.component';

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'company',
      component: CompanyComponent,
    },
    {
      path: 'company-details',
      component: CompanyDetailsComponent,
    },
    {
      path: 'comparison-charts',
      component: ComparisonChartsComponent,
    },
    {
      path: 'comparison',
      component: ComparisonComponent,
    },
    {
      path: 'ipo',
      component: IpoComponent,
    },
    {
      path: 'ipo-details',
      component: IpoDetailsComponent,
    },
    {
      path: 'sector',
      component: SectorComponent,
    },
    {
      path: 'sector-details',
      component: SectorDetailsComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
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
export class UsersRoutingModule {
}
