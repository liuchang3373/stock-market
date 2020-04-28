import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SectorListService } from '../../../../@core/service/sector-list.service';


@Component({
  selector: 'fsd-edit-sector',
  templateUrl: './edit-sector.component.html',
  styleUrls: ['./edit-sector.component.css']
})
export class EditSectorComponent  implements OnInit{
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
      Brief: {
        title: 'Brief',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  ngOnInit(): void {
    this.service.getSectorListData().subscribe(result => {
      this.source.load(result);
    });
  }
  constructor(private service: SectorListService) {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
