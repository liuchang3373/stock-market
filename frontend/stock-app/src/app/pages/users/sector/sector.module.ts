import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { SectorComponent } from './sector.component';
import { SectorChangeComponent } from './sector-change/sector-change.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbListModule,
    CommonModule
  ],
  declarations: [
    SectorComponent, SectorChangeComponent
  ]
})
export class SectorModule { }
