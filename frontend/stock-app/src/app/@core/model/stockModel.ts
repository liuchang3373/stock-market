import { ResponseModel } from './responseModel';

export class StockPriceModel {
    Date: Date;
    Open: number;
    High: number;
    Low: number;
    Close: number;
    Volume: number;
  }

export class StockPriceListRes extends ResponseModel {
  stockPriceListDto: StockPriceModel[]
}

  export class StockPriceRes extends ResponseModel {
    stockPriceDto: StockPriceModel
  }