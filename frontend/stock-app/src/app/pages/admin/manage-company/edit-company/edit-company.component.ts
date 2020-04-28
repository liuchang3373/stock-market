import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { CompanyListService } from '../../../../@core/service/company-list.service';
@Component({
  selector: 'fsd-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent  implements OnInit{
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
      CompanyCode: {
        title: 'Code',
        type: 'string',
      },
      CompanyName: {
        title: 'Name',
        type: 'string',
      },
      Sector: {
        title: 'Sector',
        type: 'string',
      },
      StockExchange: {
        title: 'Exchange',
        type: 'string',
      },
      CEO: {
        title: 'CEO',
        type: 'string',
      },
      Turnover: {
        title: 'Turnover',
        type: 'number',
      },
      About: {
        title: 'About',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  ngOnInit(): void {
    this.service.getCompanyListData().subscribe(result => {
      this.source.load(result);
    });
  }
  constructor(private service: CompanyListService) {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
