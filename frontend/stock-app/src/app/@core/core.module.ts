import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  LayoutService
} from './utils';




import { CompanyListService } from './service/company-list.service';
import { StockPriceImportService } from './service/stock-price-import.service';
import { CompanyDetailsService } from './service/company-details.service';
import { CompanyStockService } from './service/company-stock.service';
import { SectorListService } from './service/sector-list.service';
import { CompanyComparisonService } from './service/company-comparison.service';
import { UserService } from './service/user.service';
import { IPOListService } from './service/ipo-list.service';
import { PeriodsService } from './service/Periods.service';
import { ExchangeEditListService } from './service/exchange-edit-list.service';
 

const socialLinks = [
  {
    url: 'https://github.com/liuchang3373/stock-market',
    target: '_blank',
    icon: 'github',
  }
];

const DATA_SERVICES = [
  { provide: CompanyListService, useClass: CompanyListService },
  { provide: StockPriceImportService, useClass: StockPriceImportService },
  { provide: CompanyDetailsService, useClass: CompanyDetailsService },
  { provide: CompanyStockService, useClass: CompanyStockService },
  { provide: SectorListService, useClass: SectorListService },
  { provide: CompanyComparisonService, useClass: CompanyComparisonService },
  { provide: UserService, useClass: UserService },
  { provide: IPOListService, useClass: IPOListService },
  { provide: PeriodsService, useClass: PeriodsService },
  { provide: ExchangeEditListService, useClass: ExchangeEditListService }
  
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({

    strategies: [
      NbDummyAuthStrategy.setup({
        name: 'email',
        delay: 3000,
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  LayoutService,

];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
