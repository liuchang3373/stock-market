import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  LayoutService
} from './utils';




import { CompanyService } from './service/company.service';

import { UserService } from './service/user.service';
import { IPOService } from './service/ipo.service';
import { ExchangeService } from './service/exchange.service';
import { SectorService } from './service/sector.service';
import { StockPriceService } from './service/stockPrice.service';
 

const socialLinks = [
  {
    url: 'https://github.com/liuchang3373/stock-market',
    target: '_blank',
    icon: 'github',
  }
];

const DATA_SERVICES = [
  { provide: CompanyService, useClass: CompanyService },
  { provide: StockPriceService, useClass: StockPriceService },
  { provide: UserService, useClass: UserService },
  { provide: IPOService, useClass: IPOService },
  { provide: ExchangeService, useClass: ExchangeService },
  { provide: SectorService, useClass: SectorService }
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
      NbPasswordAuthStrategy.setup({
        name: 'auth',
        login: {
          endpoint: '/user-svc/login',
          redirect: {
            success: '/auth/role-route',
            failure: null, // stay on the same page
          },
          defaultErrors: ['Login/Email combination is not correct, please try again.'],
          defaultMessages: ['You have been successfully logged in.']
        },
        register: {
          endpoint: '/user-svc/signup',
          redirect: {
            success: '/auth/confirm?message=Confirmation Email has been already send to your E-mail address, please active the accout via E-mail.',
            failure: null, // stay on the same page
          },
          defaultErrors: ['Something went wrong, please try again.'],
          defaultMessages: ['You have been successfully registered.'],
        },
        token: {
          class: NbAuthJWTToken,
          key: 'token',
        },
        refreshToken: {
          endpoint: 'refresh_token',
          method: 'get',
        },
        baseEndpoint: '/api',
        
      }),
    ],
    forms: {
      login: {
        redirectDelay: 0,
        showMessages: {
          success: true,
        },
        strategy: 'auth',
      },
      register: {
        redirectDelay: 0,
        showMessages: {
          success: true,
        },
        strategy: 'auth',
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
