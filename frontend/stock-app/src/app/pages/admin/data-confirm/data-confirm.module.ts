import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogModule
} from '@nebular/theme';
import { DataConfirmComponent } from './data-confirm.component';
import { GridModule  } from '@syncfusion/ej2-angular-grids';
import { UploadResultComponent } from './upload-result/upload-result.component';
import { PageService, SortService, FilterService, GroupService, SearchService  } from '@syncfusion/ej2-angular-grids';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    GridModule,
    NbDialogModule,
    BrowserModule
  ],
  declarations: [
    DataConfirmComponent,
    UploadResultComponent
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService, SearchService]
})
export class DataConfirmModule { }
