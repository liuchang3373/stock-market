import { Component, ViewEncapsulation, Inject } from '@angular/core';

@Component({
  selector: 'ngx-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent {
  public date: Object = new Date()
  constructor() { }

  

}
