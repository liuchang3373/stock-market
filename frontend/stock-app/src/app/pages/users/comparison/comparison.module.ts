import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbButtonModule
} from '@nebular/theme';

import { ComparisonComponent } from './comparison.component';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DifferentCompanyComponent } from './different-company/different-company.component';
import { DifferentSectorComponent } from './different-sector/different-sector.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  imports: [
    NbCardModule,
    MultiSelectAllModule,
    NumericTextBoxModule,
    CheckBoxModule,
    ButtonModule,
	  FormsModule,
    ReactiveFormsModule,
    DatePickerModule,
    NbButtonModule
  ],
  declarations: [
    ComparisonComponent,
    DifferentSectorComponent,
    DifferentCompanyComponent,
    DatePickerComponent
  ]
})
export class ComparisonModule { }
