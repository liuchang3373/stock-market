import { Injectable } from '@angular/core';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    private _tokenChangeSubscription: Subscription;
    private role: string;
    private confirmedAndActive: string;

    constructor(private authService: NbAuthService) {
        this._tokenChangeSubscription = this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          const payload = token.getPayload();
          console.log("===payload=== " + JSON.stringify(payload));
          this.role = payload['accessLevel'];
          this.confirmedAndActive = payload['confirmedAndActive'];
        }
      });
    }
 
    isAuthorized(allowedRoles: string[]): boolean {
        // check if the list of allowed roles is empty, if empty, authorize the user to access the page
        console.log("========allowedRoles=========" + allowedRoles);
        if (allowedRoles == null || allowedRoles.length === 0) {
          return true;
        }
        
        this.authService.onTokenChange().pipe(
        map((token: NbAuthJWTToken) => {
            console.log("access role====== " )
          this.role = token.isValid() ? token.getPayload()['accessLevel'] : 'guest';
          console.log("access role: " + this.role)
        }),
      );

       return allowedRoles.includes(this.role);
    }

    getUserRole(): String {
        
      return this.role;
    }
    
    getConfirmedAndActive(): String {
        
        return this.confirmedAndActive;
     }

}