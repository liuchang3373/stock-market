import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule
} from '@nebular/theme';
import { ManageUserComponent } from './manage-user.component';
import { GridModule  } from '@syncfusion/ej2-angular-grids';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    GridModule
  ],
  declarations: [
    ManageUserComponent, EditUserComponent
  ]
})
export class ManageUserModule { }
