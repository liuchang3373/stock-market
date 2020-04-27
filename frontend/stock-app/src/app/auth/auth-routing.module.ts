import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NbAuthComponent } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
