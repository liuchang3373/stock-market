import { Component, Input  } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Router ,NavigationExtras} from '@angular/router';

@Component({
  selector: 'ngx-upload-result',
  templateUrl: './upload-result.component.html',
  styleUrls: ['./upload-result.component.css']
})
export class UploadResultComponent  {

  @Input() title: string;

  constructor(protected ref: NbDialogRef<UploadResultComponent>, public router:Router) {}

  dismiss() {
    this.ref.close();
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': '123' },
      fragment: 'anchor'
      };
      this.router.navigate(['/admin/import-data'],navigationExtras);
  }

}
