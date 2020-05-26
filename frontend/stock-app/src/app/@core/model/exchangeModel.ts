import { ResponseModel } from './responseModel';

export class ExchangeModel {
  id: number
  exchangeName: string
  contactAddress: string
  remarks: string
  brief: string
}

export class ExchangeListRes extends ResponseModel {
  exchangeListDto: ExchangeModel[]
}

export class ExchangeRes extends ResponseModel {
  exchangeDto: ExchangeModel
}