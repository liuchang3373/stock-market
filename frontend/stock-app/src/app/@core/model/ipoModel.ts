import { ResponseModel } from './responseModel';

export class IPOModel {
    companyName: string;
    sectorId: number;
    exchangeId: number;
    pricePerShare: number;
    totalNumberShare: number;
    openDateTime: Date;
    remarks: string;
}

export class IPOListRes extends ResponseModel{
    ipoListDto: IPOModel[];
}

export class IPORes extends ResponseModel{
    ipoListDto: IPOModel;
}