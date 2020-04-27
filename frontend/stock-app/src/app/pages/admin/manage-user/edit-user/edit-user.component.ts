import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserService } from '../../../../@core/service/user.service';


@Component({
  selector: 'ngx-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent  implements OnInit{
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      ID: {
        title: 'ID',
        type: 'number',
      },
      Name: {
        title: 'Name',
        type: 'string',
      },
      Password: {
        title: 'Password',
        type: 'string',
      },
      UserType: {
        title: 'User Type',
        type: 'number',
      },
      Email: {
        title: 'Email',
        type: 'string',
      },
      MobileNumber: {
        title: 'MobileNumber',
        type: 'number',
      },
      Comfirmed: {
        title: 'Comfirmed',
        type: 'number',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  ngOnInit(): void {
    this.service.getUserListData().subscribe(result => {
      this.source.load(result);
    });
  }
  constructor(private service: UserService) {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
