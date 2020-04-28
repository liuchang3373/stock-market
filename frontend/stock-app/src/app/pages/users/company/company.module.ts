import { NgModule } from '@angular/core';
import {
  NbCardModule
} from '@nebular/theme';
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { GridModule  } from '@syncfusion/ej2-angular-grids';


@NgModule({
  imports: [
    NbCardModule,
    GridModule
  ],
  declarations: [
    CompanyComponent,
	  CompanyListComponent
  ]
})
export class CompanyModule { }
