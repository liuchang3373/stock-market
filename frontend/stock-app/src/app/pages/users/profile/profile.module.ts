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
import { ProfileComponent } from './profile.component';

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
    ProfileComponent
  ]
})
export class ProfileModule { }
