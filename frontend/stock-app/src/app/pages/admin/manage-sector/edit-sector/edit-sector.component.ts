import { Component, OnInit, ViewChild } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ToolbarItems, GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { PageService, NewRowPosition, EditService, SearchService, ToolbarService  } from '@syncfusion/ej2-angular-grids';
import { Router ,NavigationExtras} from '@angular/router';
import { SectorService } from '../../../../@core/service/sector.service';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns'


@Component({
  selector: 'fsd-edit-sector',
  templateUrl: './edit-sector.component.html',
  styleUrls: ['./edit-sector.component.css'],
  providers: [PageService, SearchService, ToolbarService, EditService ]
})
export class EditSectorComponent  implements OnInit{
  public data: Object[];
  public pageSettings: PageSettingsModel;
  public toolbar: string[];
  @ViewChild('grid')
  public grid: GridComponent;
  @ViewChild('ddsample')
  public dropDown: DropDownListComponent;
  public editSettings: Object;
  public editparams: Object;
  public formatoptions: Object;
  public sectorIdRules: Object;
  public sectorNameRules: Object;
  public briefRules: Object;

  public ngOnInit(): void {
    this.service.getSectorListData().subscribe(result => {
      this.data = result.sectorListDto
    });
      //this.data = companyData;
      this.pageSettings = { pageCount: 5 };
      this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel','Search'];
      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true , mode: 'Normal', newRowPosition: 'Top' };
      this.editparams = { params: { popupHeight: '300px' } };
      this.sectorIdRules = { required: true, number: true };
      this.sectorNameRules = { required: true };
      this.briefRules = { required: false };
  }

  public newRowPosition: { [key: string]: Object }[] = [
      { id: 'Top', newRowPosition: 'Top' },
      { id: 'Bottom', newRowPosition: 'Bottom' }
  ];
  public localFields: Object = { text: 'newRowPosition', value: 'id' };

  onChange(e: ChangeEventArgs): void {
      let gridInstance: any = (<any>document.getElementById('sectorTable')).ej2_instances[0];
      (gridInstance.editSettings as any).newRowPosition = <NewRowPosition>this.dropDown.value;
  }

  actionBegin(args: any) :void {
      let gridInstance: any = (<any>document.getElementById('sectorTable')).ej2_instances[0];
      if (args.requestType === 'save') {
          if (gridInstance.pageSettings.currentPage !== 1 && gridInstance.editSettings.newRowPosition === 'Top') {
              args.index = (gridInstance.pageSettings.currentPage * gridInstance.pageSettings.pageSize) - gridInstance.pageSettings.pageSize;
          } else if (gridInstance.editSettings.newRowPosition === 'Bottom') {
              args.index = (gridInstance.pageSettings.currentPage * gridInstance.pageSettings.pageSize) - 1;
          }
      }
  }
  actionComplete(args: any) :void {
    if (args.requestType === 'save') {
      console.log("===actionB===" + JSON.stringify(args.action));
      console.log("args=== " + JSON.stringify(args.rowData));
      let data: any
      if(args.action == 'edit'){
        data = args.rowData
      }else if(args.action == 'add'){
        data = args.data
      }
      this.service.createOrUpdateSector(data).subscribe(result => {
        console.log("update result=== " + JSON.stringify(result))
      });
    }else if(args.requestType === 'delete'){
      console.log("delete result=== " + JSON.stringify(args))
      this.service.deleteSector(args.data[0].id).subscribe(result => {
        console.log("update result=== " + JSON.stringify(result))
      });
    }
  }
  constructor(public router:Router, private service: SectorService) {}

  rowSelected(args: RowSelectEventArgs) {
    const selectedrecords: object[] = this.grid.getSelectedRecords();  // Get the selected records.
    let navigationExtras: NavigationExtras = selectedrecords[0];
    //this.router.navigate(['/users/ipo-details'],navigationExtras);
  }

}
