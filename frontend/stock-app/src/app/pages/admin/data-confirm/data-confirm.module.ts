import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbUserModule,
  NbInputModule,
  NbDialogModule
} from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { DataConfirmComponent } from './data-confirm.component';
import { GridModule  } from '@syncfusion/ej2-angular-grids';
import { UploadResultComponent } from './upload-result/upload-result.component';
import { PageService, SortService, FilterService, GroupService, SearchService  } from '@syncfusion/ej2-angular-grids';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
	  NbInputModule,
    NbUserModule,
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
