import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth-guard.service';

export const routes: Routes = [
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/users/users.module')
      .then(m => m.UsersModule),
    data: {
      allowedRoles: ['user', 'admin']
    }
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/admin/admin.module')
      .then(m => m.AdminModule),
    data: {
      allowedRoles: ['admin']
    }
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'admin', redirectTo: 'admin', pathMatch: 'full' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
