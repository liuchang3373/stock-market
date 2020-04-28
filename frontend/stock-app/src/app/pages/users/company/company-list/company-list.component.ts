import { Component, OnInit, ViewChild } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ToolbarItems, GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService, SearchService, ToolbarService  } from '@syncfusion/ej2-angular-grids';
import { Router ,NavigationExtras} from '@angular/router';
import { CompanyListService } from '../../../../@core/service/company-list.service';

@Component({
  selector: 'fsd-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  providers: [PageService, SortService, FilterService, GroupService, SearchService, ToolbarService ]
})
export class CompanyListComponent {
    public data: Object[];
    public pageSettings: PageSettingsModel;
    public toolbar: ToolbarItems[];

    @ViewChild('grid')
    public grid: GridComponent;

    public ngOnInit(): void {
      
      this.service.getCompanyListData().subscribe(result => {
        this.data = result
      });
        //this.data = companyData;
        this.pageSettings = { pageCount: 5 };
        this.toolbar = ['Search'];
    }

  constructor(public router:Router, private service: CompanyListService) {}
  
  rowSelected(args: RowSelectEventArgs) {
    const selectedrecords: object[] = this.grid.getSelectedRecords();  // Get the selected records.
    let navigationExtras: NavigationExtras = selectedrecords[0];
    this.router.navigate(['/users/company-details'],navigationExtras);
  }
}


