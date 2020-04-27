import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {  ExchangeEditListService } from '../../../../@core/service/exchange-edit-list.service';
@Component({
  selector: 'ngx-edit-exchange',
  templateUrl: './edit-exchange.component.html',
  styleUrls: ['./edit-exchange.component.css']
})
export class EditExchangeComponent  implements OnInit{
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
      StockExchange: {
        title: 'Exchange',
        type: 'string',
      },
      Brief: {
        title: 'Brief',
        type: 'string',
      },
      ContactAddress: {
        title: 'Contact Address',
        type: 'string',
      },
      Remarks: {
        title: 'Remarks',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  ngOnInit(): void {
    this.service.getExchangeEditListData().subscribe(result => {
      this.source.load(result);
    });
  }
  constructor(private service: ExchangeEditListService) {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
