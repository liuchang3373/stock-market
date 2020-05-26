import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { NbRegisterComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { UserService } from '../../@core/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbRegisterComponent {
  //httpClient: HttpClient
  userService: UserService
    
  constructor(service: NbAuthService, @Inject(NB_AUTH_OPTIONS) protected option, cd: ChangeDetectorRef, router: Router, userService: UserService){
    super(service,option,cd,router);
    this.userService = userService;
  };

  
}
