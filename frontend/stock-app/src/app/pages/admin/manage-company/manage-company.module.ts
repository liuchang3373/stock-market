import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule
} from '@nebular/theme';
import { ManageCompanyComponent } from './manage-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { GridModule  } from '@syncfusion/ej2-angular-grids';

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    GridModule
  ],
  declarations: [
    ManageCompanyComponent,
    EditCompanyComponent
  ]
})
export class ManageCompanyModule { }
