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
  NbTreeGridModule 
} from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { ManageCompanyComponent } from './manage-company.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

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
    Ng2SmartTableModule
  ],
  declarations: [
    ManageCompanyComponent,
    EditCompanyComponent
  ]
})
export class ManageCompanyModule { }
