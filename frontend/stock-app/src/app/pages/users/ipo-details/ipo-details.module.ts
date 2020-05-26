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
import { IpoDetailsComponent } from './ipo-details.component';

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
	  NbTreeGridModule
  ],
  declarations: [
    IpoDetailsComponent
  ]
})
export class IpoDetailsModule { }
