import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fsd-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private activateInfo: ActivatedRoute, router: Router) { }
  public message: string
  ngOnInit() {
    this.activateInfo.queryParams.subscribe(queryParams => {
      this.message = queryParams.message;
      });
  }

}
