import { Component, Input } from '@angular/core';

@Component({
  selector: 'fsd-upload-error',
  templateUrl: './upload-error.component.html',
  styleUrls: ['./upload-error.component.css']
})
export class UploadErrorComponent {

  @Input() errorMsg: string;
  @Input() displayError: boolean;

}
