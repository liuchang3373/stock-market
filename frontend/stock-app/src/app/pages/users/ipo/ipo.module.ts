import { NgModule } from '@angular/core';
import {
  NbCardModule,
} from '@nebular/theme';

import { IpoComponent } from './ipo.component';
import { GridModule  } from '@syncfusion/ej2-angular-grids';
import { IPOListComponent } from './ipo-list/ipo-list.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

@NgModule({
  imports: [
    NbCardModule,
    GridModule,
    DialogModule
  ],
  declarations: [
    IpoComponent, IPOListComponent
  ]
})
export class IpoModule { }
