import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule
} from '@nebular/theme';
import { ManageIpoComponent } from './manage-ipo.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EditIPOComponent } from './edit-ipo/edit-ipo.component';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ManageIpoComponent, EditIPOComponent
  ]
})
export class ManageIpoModule { }
