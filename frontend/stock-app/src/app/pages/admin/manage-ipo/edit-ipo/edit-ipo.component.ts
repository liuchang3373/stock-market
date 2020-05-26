import { Component, OnInit, ViewChild } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ToolbarItems, GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { PageService, NewRowPosition, EditService, SearchService, ToolbarService  } from '@syncfusion/ej2-angular-grids';
import { Router ,NavigationExtras} from '@angular/router';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns'
import {  IPOService } from '../../../../@core/service/ipo.service';

@Component({
  selector: 'fsd-edit-ipo',
  templateUrl: './edit-ipo.component.html',
  styleUrls: ['./edit-ipo.component.css'],
  providers: [PageService, SearchService, ToolbarService, EditService ]
})
export class EditIPOComponent  implements OnInit{
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
  public ipoIdRules: Object;
  public companyNameRules: Object;
  public pricePerShareRules: Object;
  public totalNumberShareRules: Object;
  public openDateTimeRules: Object;
  public remarksRules: Object;
  public briefRules: Object;
  public sectorIdRules: Object;
  public exchangeIdRules: Object;

  public ngOnInit(): void {
    this.service.getIPOListData().subscribe(result => {
      console.log("====data==== " + JSON.stringify(result))
      this.data = result
    });
      //this.data = companyData;
      this.pageSettings = { pageCount: 5 };
      this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel','Search'];
      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true , mode: 'Normal', newRowPosition: 'Top' };
      this.editparams = { params: { popupHeight: '300px' } };
      this.ipoIdRules = { required: true, number: true };
      this.companyNameRules = { required: true };
      this.pricePerShareRules = { required: true, number: true };
      this.totalNumberShareRules = { required: true, number: true };
      this.openDateTimeRules = { required: false };
      this.remarksRules = { required: false };
      this.briefRules = { required: false };
      this.sectorIdRules = { required: false, number: true };
      this.exchangeIdRules = { required: false, number: true };
  }

  public newRowPosition: { [key: string]: Object }[] = [
      { id: 'Top', newRowPosition: 'Top' },
      { id: 'Bottom', newRowPosition: 'Bottom' }
  ];
  public localFields: Object = { text: 'newRowPosition', value: 'id' };

  onChange(e: ChangeEventArgs): void {
      let gridInstance: any = (<any>document.getElementById('ipoTable')).ej2_instances[0];
      (gridInstance.editSettings as any).newRowPosition = <NewRowPosition>this.dropDown.value;
  }

  actionBegin(args: any) :void {
      let gridInstance: any = (<any>document.getElementById('ipoTable')).ej2_instances[0];
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
      this.service.createOrUpdateIPO(data).subscribe(result => {
        console.log("update result=== " + JSON.stringify(result))
      });
    }else if(args.requestType === 'delete'){
      console.log("delete result=== " + JSON.stringify(args))
      this.service.deleteIPO(args.data[0].id).subscribe(result => {
        console.log("update result=== " + JSON.stringify(result))
      });
    }
  }
  constructor(public router:Router, private service: IPOService) {}

  rowSelected(args: RowSelectEventArgs) {
    const selectedrecords: object[] = this.grid.getSelectedRecords();  // Get the selected records.
    let navigationExtras: NavigationExtras = selectedrecords[0];
    //this.router.navigate(['/users/ipo-details'],navigationExtras);
  }

}
