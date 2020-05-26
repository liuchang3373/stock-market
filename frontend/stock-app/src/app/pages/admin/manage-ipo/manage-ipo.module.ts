import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule
} from '@nebular/theme';
import { ManageIpoComponent } from './manage-ipo.component';
import { GridModule  } from '@syncfusion/ej2-angular-grids';
import { EditIPOComponent } from './edit-ipo/edit-ipo.component';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    GridModule
  ],
  declarations: [
    ManageIpoComponent, EditIPOComponent
  ]
})
export class ManageIpoModule { }
