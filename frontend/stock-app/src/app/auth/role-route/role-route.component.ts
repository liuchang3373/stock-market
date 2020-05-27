import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'fsd-role-route',
  templateUrl: './role-route.component.html',
  styleUrls: ['./role-route.component.css']
})
export class RoleRouteComponent implements OnInit {
  private role: String;
  private confirmAndactive: String;
  constructor(private router: Router, private authorizationService: AuthorizationService) {
    this.role = this.authorizationService.getUserRole();
    this.confirmAndactive = this.authorizationService.getConfirmedAndActive();
   }

  ngOnInit() {
    if(this.confirmAndactive == "1"){
      if(this.role == "1") {
        this.router.navigate(['/admin']);
      }else if(this.role == "2") {
        this.router.navigate(['/users']);
      }
    }else{
      let msg = 'Your account has not activated yet, please activate your acount via E-mail'
      this.router.navigate(['/auth/confirm'], {
        queryParams: {message: msg}
  });
    }
  }

}
