export class CompanyWeekChangeEntry {
    x: string;
    low: number;
    high: number
}
  
export class CompanyComparisonEntry {
    company1: CompanyWeekChangeEntry[];
    company2: CompanyWeekChangeEntry[];
}