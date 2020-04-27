import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { IPOListService } from '../../../../@core/service/ipo-list.service';

@Component({
  selector: 'ngx-edit-ipo',
  templateUrl: './edit-ipo.component.html',
  styleUrls: ['./edit-ipo.component.css']
})
export class EditIPOComponent  implements OnInit{
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
      CompanyName: {
        title: 'Company Name',
        type: 'string',
      },
      Sector: {
        title: 'Sector',
        type: 'string',
      },
      Stockexchange: {
        title: 'Stock Exchange',
        type: 'string',
      },
      PricePerShare: {
        title: 'Price Per Share',
        type: 'string',
      },
      TotalNumberShares: {
        title: 'Total Number of Shares',
        type: 'string',
      },
      OpenDateTime: {
        title: 'Open Date Time',
        type: 'date',
      },
      Remarks: {
        title: 'Remarks',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  ngOnInit(): void {
    this.service.getIPOListData().subscribe(result => {
      this.source.load(result);
    });
  }
  constructor(private service: IPOListService) {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
