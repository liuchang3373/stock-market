import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="" target="_blank">Jack.L(lchangcd@cn.ibm.com)</a></b> For 2020 FSD
    </span>
    <div class="socials">
      <a href="https://github.com/liuchang3373/stock-market" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}
