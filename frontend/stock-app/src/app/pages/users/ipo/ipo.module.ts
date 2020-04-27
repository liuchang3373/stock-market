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
import { IpoComponent } from './ipo.component';
import { GridModule  } from '@syncfusion/ej2-angular-grids';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { IPOListComponent } from './ipo-list/ipo-list.component';


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
    GridModule,
    NbProgressBarModule,

    LeafletModule,
	  NbTreeGridModule
  ],
  declarations: [
    IpoComponent, IPOListComponent
  ]
})
export class IpoModule { }
