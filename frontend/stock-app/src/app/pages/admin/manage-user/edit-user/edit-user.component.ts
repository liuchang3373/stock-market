import { Component, OnInit, ViewChild } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ToolbarItems, GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { PageService, NewRowPosition, EditService, SearchService, ToolbarService  } from '@syncfusion/ej2-angular-grids';
import { Router ,NavigationExtras} from '@angular/router';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns'
import {  UserService } from '../../../../@core/service/user.service';


@Component({
  selector: 'fsd-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [PageService, SearchService, ToolbarService, EditService ]
})
export class EditUserComponent  implements OnInit{
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
  public userIdRules: Object;
  public emailRules: Object;
  public userNameRules: Object;
  public phoneNumberRules: Object;
  public confirmedAndActiveRules: Object;
  public passwordHashRules: Object;
  public accessLevelRules: Object;
  public photoUrlRules: Object;


  public ngOnInit(): void {
    this.service.getUserListData().subscribe(result => {
      this.data = result.userListDto
    });
      //this.data = companyData;
      this.pageSettings = { pageCount: 5 };
      this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel','Search'];
      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true , mode: 'Normal', newRowPosition: 'Top' };
      this.editparams = { params: { popupHeight: '300px' } };
      this.userIdRules = { required: true, number: true };
      this.emailRules = { required: true };
      this.userNameRules = { required: true };
      this.phoneNumberRules = { required: false, number: true };
      this.confirmedAndActiveRules = { required: true, number: true };
      this.passwordHashRules = { required: false };
      this.accessLevelRules = { required: true, number: true };
      this.photoUrlRules = { required: false };
      
  }

  public newRowPosition: { [key: string]: Object }[] = [
      { id: 'Top', newRowPosition: 'Top' },
      { id: 'Bottom', newRowPosition: 'Bottom' }
  ];
  public localFields: Object = { text: 'newRowPosition', value: 'id' };

  onChange(e: ChangeEventArgs): void {
      let gridInstance: any = (<any>document.getElementById('userTable')).ej2_instances[0];
      (gridInstance.editSettings as any).newRowPosition = <NewRowPosition>this.dropDown.value;
  }

  actionBegin(args: any) :void {
      let gridInstance: any = (<any>document.getElementById('userTable')).ej2_instances[0];
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
      this.service.createOrUpdateUser(data).subscribe(result => {
        console.log("update result=== " + JSON.stringify(result))
      });
    }else if(args.requestType === 'delete'){
      console.log("delete result=== " + JSON.stringify(args))
      this.service.deleteUser(args.data[0].id).subscribe(result => {
        console.log("update result=== " + JSON.stringify(result))
      });
    }
  }
  constructor(public router:Router, private service: UserService) {}

  rowSelected(args: RowSelectEventArgs) {
    const selectedrecords: object[] = this.grid.getSelectedRecords();  // Get the selected records.
    let navigationExtras: NavigationExtras = selectedrecords[0];
    //this.router.navigate(['/users/ipo-details'],navigationExtras);
  }

}
