import { Component, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  Name: string;
  Code: string;
  Sector: string;
  Exchange: string;
  CEO: string;
  Turnover: number;
  About: string;
}

@Component({
  selector: 'ngx-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent {
  customColumn = 'Name';
  defaultColumns = [ 'Code', 'Sector', 'Exchange' , 'CEO', 'Turnover' , 'About' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: { Name: 'Facebook(FB)', Code: '002831', Sector: 'Tech', Exchange: 'US', CEO: 'Zuckerberg' , Turnover: 2367.63 , About: 'XXXXXXXXX' }
    },
    {
      data: { Name: 'Amazon(AMZN)', Code: '422133', Sector: 'Tech', Exchange: 'US', CEO: 'Jeff Bezos', Turnover: 512.26 , About: 'AAAAAAAAA' }
    },
    {
      data: { Name: 'Apple(AAPL)', Code: '100122', Sector: 'Tech', Exchange: 'US', CEO: 'Tim Cook' , Turnover: 4925.63 , About: 'CCCCCCCCCC' }
    },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}


