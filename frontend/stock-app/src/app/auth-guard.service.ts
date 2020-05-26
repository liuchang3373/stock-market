import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';
import { AuthorizationService } from './authorization.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    private role: String;
    private confirmedAndActive: String;

    constructor(private router: Router, private authorizationService: AuthorizationService) {
        this.role = this.authorizationService.getUserRole();
        this.confirmedAndActive = this.authorizationService.getConfirmedAndActive();
    }
    
    canActivate( next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const allowedRoles = next.data.allowedRoles;
        //const isAuthorized = this.authorizationService.isAuthorized(allowedRoles);
        
        let isAuthorized = false;
        if(this.confirmedAndActive == "1"){
            if(this.role == "1") {
                isAuthorized = allowedRoles.includes("admin");
            }else if(this.role == "2"){
                isAuthorized = allowedRoles.includes("user");
            }else{
                this.router.navigate(['auth/login']);
            }
        }else{
            this.router.navigate(['auth/confirm']);
        }

            
        //if (!isAuthorized) {
        //    this.router.navigate(['auth/login']);
       // }

        return isAuthorized;

    }
}