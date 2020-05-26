import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { UploadResultComponent } from './upload-result/upload-result.component';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ToolbarItems, GridComponent} from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, SearchService, ToolbarService  } from '@syncfusion/ej2-angular-grids';
import { StockPriceService } from '../../../@core/service/stockprice.service';
@Component({
  selector: 'fsd-data-confirm',
  templateUrl: 'data-confirm.component.html',
  styleUrls: ['./data-confirm.component.css'],
  providers: [PageService, SortService, FilterService, SearchService, ToolbarService ]
})
export class DataConfirmComponent implements OnInit{

    public data: Object[];
    public pageSettings: PageSettingsModel;
    public toolbar: ToolbarItems[];

    @ViewChild('grid')
    public grid: GridComponent;

    public ngOnInit(): void {
      this.service.getStockPriceImportData().subscribe(result => {
        this.data = result;
      });
      this.pageSettings = { pageCount: 5 };
      this.toolbar = ['Search'];
    }

  constructor(private dialogService: NbDialogService, private service: StockPriceService) {}
  
  open() {
    this.dialogService.open(UploadResultComponent, {
      context: {
        title: 'The results of upload data',
      },
    });
  }
}
