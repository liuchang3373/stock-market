import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { NbLoginComponent, NbAuthService, passwordStrategyOptions, NbAuthSocialLink, NB_AUTH_OPTIONS } from '@nebular/auth';
import { UserService } from '../../@core/service/user.service';
import { Router } from '@angular/router';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  extends NbLoginComponent{
    //httpClient: HttpClient
    userService: UserService
    
    constructor(service: NbAuthService, @Inject(NB_AUTH_OPTIONS) protected option, cd: ChangeDetectorRef, router: Router, userService: UserService){
      super(service,option,cd,router);
      this.userService = userService;
    };
}
