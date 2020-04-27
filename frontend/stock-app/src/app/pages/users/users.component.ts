import { Component } from '@angular/core';

import { MENU_ITEMS } from './users-menu';

@Component({
  selector: 'ngx-users',
  styleUrls: ['users.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class UsersComponent {

  menu = MENU_ITEMS;
}
