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
import { SectorComponent } from './sector.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SectorChangeComponent } from './sector-change/sector-change.component';


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
    SectorComponent, SectorChangeComponent
  ]
})
export class SectorModule { }
