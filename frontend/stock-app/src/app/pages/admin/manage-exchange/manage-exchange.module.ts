import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule
} from '@nebular/theme';
import { ManageExchangeComponent } from './manage-exchange.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EditExchangeComponent } from './edit-exchange/edit-exchange.component';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ManageExchangeComponent,EditExchangeComponent
  ]
})
export class ManageExchangeModule { }
