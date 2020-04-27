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
  NbListModule,
} from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { ManageSectorComponent } from './manage-sector.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { EditSectorComponent } from './edit-sector/edit-sector.component';


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
    Ng2SmartTableModule
  ],
  declarations: [
    ManageSectorComponent, EditSectorComponent
  ]
})
export class ManageSectorModule { }
