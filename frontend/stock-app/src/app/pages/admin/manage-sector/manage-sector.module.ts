import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule
} from '@nebular/theme';
import { ManageSectorComponent } from './manage-sector.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EditSectorComponent } from './edit-sector/edit-sector.component';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ManageSectorComponent, EditSectorComponent
  ]
})
export class ManageSectorModule { }
