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
import { SectorDetailsComponent } from './sector-details.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';


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
	NbTreeGridModule
  ],
  declarations: [
    SectorDetailsComponent
  ]
})
export class SectorDetailsModule { }
