import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import {
  NbLayoutModule,
  NbThemeModule,
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    AuthRoutingModule,
    NbLayoutModule,
    NbThemeModule,
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    FormsModule,
    NbAuthModule
  ],
  declarations: [LoginComponent, RegisterComponent, RequestPasswordComponent, ResetPasswordComponent]
})
export class AuthModule { }
