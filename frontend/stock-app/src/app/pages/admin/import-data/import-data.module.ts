import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule
} from '@nebular/theme';
import { ImportDataComponent } from './import-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UploadErrorComponent } from './upload-error/upload-error.component';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    DialogModule,
    UploaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ImportDataComponent,
    FileUploadComponent,
    UploadErrorComponent
  ]
})
export class ImportDataModule { }
