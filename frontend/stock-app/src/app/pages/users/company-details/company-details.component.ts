import { Component, ViewChild } from '@angular/core';
import { CompanyDetailsService } from '../../../@core/service/company-details.service';
import { CompanyModel } from '../../../@core/model/companyModel';

@Component({
  selector: 'ngx-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['company-details.component.scss']
})
export class CompanyDetailsComponent {
  @ViewChild('item', { static: true }) accordion;
  
  constructor(private service: CompanyDetailsService){};
  public companyDetailsData: CompanyModel;
  ngOnInit(): void {
    this.service.getCompanyDetailsData()
    .subscribe(
      (data: CompanyModel)=> { 
        this.companyDetailsData = data; 
        //console.log("service: " + JSON.stringify(data));
      },
      err => console.error(err),
      () => console.log('done')
    );
  };

	ngAfterContentInit() {
      this.toggle();
  }
    
  toggle() {
    	this.accordion.toggle();
  }
}
