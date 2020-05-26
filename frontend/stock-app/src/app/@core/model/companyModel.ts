import { ResponseModel } from '../model/responseModel';

export class CompanyListRes extends ResponseModel{
    companyListDto: CompanyDto[];
}

export class CompanyRes extends ResponseModel{
    companyDto: CompanyDto;
}

export class CompanyDto {
    companyName: string;
    companyCode: string;
    sectorName: string;
    exchangeName: string;
    ceoName: string;
    turnOver: number;
    brief: string;
}

export class CompanyWeekChangeDto {
    x: string;
    low: number;
    high: number
}
  
export class CompanyComparisonRes extends ResponseModel {
    company1: CompanyWeekChangeDto[];
    company2: CompanyWeekChangeDto[];
}
