import { ResponseModel } from './responseModel';

export class SectorModel {
    ID: number;
    Name: string;
    Brief: string;
}

export class SectorChangeModel {
    SectorName: string;
    DeltDaUp: boolean;
    Change: number;
}

export class SectorListRes extends ResponseModel {
    sectorListDto: SectorModel[]
}

export class SectorRes extends ResponseModel {
    sectorDto: SectorModel
}