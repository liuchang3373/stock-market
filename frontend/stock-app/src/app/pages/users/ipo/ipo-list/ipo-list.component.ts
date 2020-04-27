import { Component, OnInit, ViewChild } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ToolbarItems, GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService, SearchService, ToolbarService  } from '@syncfusion/ej2-angular-grids';
import { Router ,NavigationExtras} from '@angular/router';
import { IPOListService } from '../../../../@core/service/ipo-list.service';

@Component({
  selector: 'ngx-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.scss'],
  providers: [PageService, SortService, FilterService, GroupService, SearchService, ToolbarService ]
})
export class IPOListComponent {
    public data: Object[];
    public pageSettings: PageSettingsModel;
    public toolbar: ToolbarItems[];

    @ViewChild('grid')
    public grid: GridComponent;

    public ngOnInit(): void {
      
      this.service.getIPOListData().subscribe(result => {
        this.data = result
      });
        //this.data = companyData;
        this.pageSettings = { pageCount: 5 };
        this.toolbar = ['Search'];
    }

  constructor(public router:Router, private service: IPOListService) {}
  
  rowSelected(args: RowSelectEventArgs) {
    const selectedrecords: object[] = this.grid.getSelectedRecords();  // Get the selected records.
    let navigationExtras: NavigationExtras = selectedrecords[0];
    this.router.navigate(['/users/ipo-details'],navigationExtras);
  }
}


