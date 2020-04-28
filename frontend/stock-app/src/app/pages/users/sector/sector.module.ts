import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { SectorComponent } from './sector.component';
import { SectorChangeComponent } from './sector-change/sector-change.component';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbListModule,
  ],
  declarations: [
    SectorComponent, SectorChangeComponent
  ]
})
export class SectorModule { }
