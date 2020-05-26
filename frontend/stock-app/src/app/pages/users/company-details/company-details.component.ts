import { Component, ViewChild, Output } from '@angular/core';
import { CompanyDto, CompanyRes } from '../../../@core/model/companyModel';
import { Router, ActivatedRoute } from '@angular/router';
import { StockPriceService } from '../../../@core/service/stockPrice.service';
import { CompanyService } from '../../../@core/service/company.service';

@Component({
  selector: 'fsd-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['company-details.component.scss']
})
export class CompanyDetailsComponent {
  @ViewChild('item', { static: true }) accordion;
  
  public companyCode: string;
  public companyDetailsData: CompanyDto;
  public stockchartData: Object[];
  public primaryXAxis: Object;
  public primaryYAxis: Object;
  public title: string;

  constructor(private stockService: StockPriceService, private companyService: CompanyService, private activateInfo:ActivatedRoute,
    private router:Router ){
      
    };

  ngOnInit(): void {
    
    this.activateInfo.queryParams.subscribe(queryParams => {
        this.companyCode = queryParams.companyCode;
        });
    //alert("companyCode: " + this.companyCode);
    this.stockService.getCompanyStockPriceListData()
      .subscribe(
        (data)=> { 
          this.stockchartData = data
          console.log("service: " + JSON.stringify(data));
        },
        err => console.error(err),
        () => console.log('done stock')
      );
    this.companyService.getCompanyDetailsData(this.companyCode)
    .subscribe(
      (data: CompanyRes)=> { 
        this.companyDetailsData = data.companyDto; 
        //console.log("companyDetailsData: " + JSON.stringify(data.companyDto));
      },
      err => console.error(err),
      () => console.log('done')
    );

    this.title = 'APPLE';
    this.primaryXAxis = {
    valueType: 'DateTime'
    };
  };

	ngAfterContentInit() {
      this.toggle();
  }
    
  toggle() {
    	this.accordion.toggle();
  }
}
