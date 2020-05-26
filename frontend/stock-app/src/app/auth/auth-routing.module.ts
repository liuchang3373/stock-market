import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NbAuthComponent } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RoleRouteComponent } from './role-route/role-route.component';
import { ConfirmComponent } from './confirm/confirm.component';


const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,  
    children: [
      {
        path: 'login',
        component: LoginComponent, 
      },
      {
        path: 'register',
        component: RegisterComponent, 
      },
      {
        path: 'request-password',
        component: RequestPasswordComponent, 
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent, 
      },
      {
        path: 'role-route',
        component: RoleRouteComponent, 
      },
      {
        path: 'confirm',
        component: ConfirmComponent, 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
