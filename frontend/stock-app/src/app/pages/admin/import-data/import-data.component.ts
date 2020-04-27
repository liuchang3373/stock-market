import { Component } from '@angular/core';
import { Router ,NavigationExtras} from '@angular/router';

@Component({
  selector: 'ngx-import-data',
  templateUrl: './import-data.component.html',
})
export class ImportDataComponent {
  constructor( public router:Router) { }
  gotoDataConfirm(){
    let navigationExtras: NavigationExtras = {
    queryParams: { 'session_id': '123' },
    fragment: 'anchor'
    };
    this.router.navigate(['/admin/data-confirm'],navigationExtras);
  }
}
