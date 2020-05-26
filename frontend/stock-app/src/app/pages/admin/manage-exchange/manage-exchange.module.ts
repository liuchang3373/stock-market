import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule
} from '@nebular/theme';
import { ManageExchangeComponent } from './manage-exchange.component';
import { GridModule  } from '@syncfusion/ej2-angular-grids';
import { EditExchangeComponent } from './edit-exchange/edit-exchange.component';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    GridModule
  ],
  declarations: [
    ManageExchangeComponent,EditExchangeComponent
  ]
})
export class ManageExchangeModule { }
