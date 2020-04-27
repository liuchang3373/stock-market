import { Component } from '@angular/core';
import { Router ,NavigationExtras} from '@angular/router';

@Component({
  selector: 'ngx-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})
export class ComparisonComponent{
  constructor( public router:Router) { }
  gotoComparisonChart(){
    let navigationExtras: NavigationExtras = {
    queryParams: { 'session_id': '123' },
    fragment: 'anchor'
    };
    this.router.navigate(['/users/comparison-charts'],navigationExtras);
  }

}
