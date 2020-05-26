import { Component, OnInit, ViewChild } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ToolbarItems, GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService, SearchService, ToolbarService  } from '@syncfusion/ej2-angular-grids';
import { Router ,NavigationExtras} from '@angular/router';
import { IPOService } from '../../../../@core/service/ipo.service';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'fsd-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.scss'],
  providers: [PageService, SortService, FilterService, GroupService, SearchService, ToolbarService ]
})
export class IPOListComponent {
    public data: Object[];
    public pageSettings: PageSettingsModel;
    public toolbar: ToolbarItems[];
    public groupOptions: Object;
    public refresh: Boolean;
    @ViewChild('grid')
    public grid: GridComponent;
    public alertDialog: DialogComponent;
    public alertHeader: string = 'Grouping';
    public hidden: Boolean = false;
    public target: string = '.control-section';
    public alertWidth: string = '300px';
    public alertContent: string = 'Grouping is disabled for this column';
    public showCloseIcon: Boolean = false;
    public animationSettings: Object = { effect: 'None' };
    public alertDlgBtnClick = () => {
        this.alertDialog.hide();
    }
    public alertDlgButtons: Object[] = [{ click: this.alertDlgBtnClick.bind(this), buttonModel: { content: 'OK', isPrimary: true } }];

    public ngOnInit(): void {
      
      this.service.getIPOListData().subscribe(result => {
        this.data = result
      });
        //this.data = companyData;
        this.pageSettings = { pageCount: 5 };
        this.toolbar = ['Search'];
        this.groupOptions = { showGroupedColumn: false, columns: ['Sector'] };
    }

    dataBound() {
      if(this.refresh){
          this.grid.groupColumn('Country');
          this.refresh =false;
      }
    }
    load() {
        this.refresh = (<any>this.grid).refreshing;
    }
    created() {
        this.grid.on("columnDragStart", this.columnDragStart, this);
    }
    public columnDragStart(args: any) {
        if(args.column.field === "Mainfieldsofinvention"){
            this.alertDialog.show();
      }
    }

  constructor(public router:Router, private service: IPOService) {}
  
  rowSelected(args: RowSelectEventArgs) {
    const selectedrecords: object[] = this.grid.getSelectedRecords();  // Get the selected records.
    let navigationExtras: NavigationExtras = selectedrecords[0];
    this.router.navigate(['/users/ipo-details'],navigationExtras);
  }
}


