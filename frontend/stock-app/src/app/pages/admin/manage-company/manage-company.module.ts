import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule
} from '@nebular/theme';
import { ManageCompanyComponent } from './manage-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ManageCompanyComponent,
    EditCompanyComponent
  ]
})
export class ManageCompanyModule { }
