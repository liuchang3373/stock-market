import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule
} from '@nebular/theme';
import { ManageSectorComponent } from './manage-sector.component';
import { EditSectorComponent } from './edit-sector/edit-sector.component';
import { GridModule  } from '@syncfusion/ej2-angular-grids';

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    GridModule
  ],
  declarations: [
    ManageSectorComponent, EditSectorComponent
  ]
})
export class ManageSectorModule { }
