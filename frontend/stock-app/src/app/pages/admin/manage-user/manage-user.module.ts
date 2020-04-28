import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule
} from '@nebular/theme';
import { ManageUserComponent } from './manage-user.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ManageUserComponent, EditUserComponent
  ]
})
export class ManageUserModule { }
