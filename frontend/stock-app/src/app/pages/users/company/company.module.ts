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
import { CompanyComponent } from './company.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CompanyListComponent } from './company-list/company-list.component';
import { GridModule  } from '@syncfusion/ej2-angular-grids';


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
    GridModule
  ],
  declarations: [
    CompanyComponent,
	  CompanyListComponent
  ]
})
export class CompanyModule { }
