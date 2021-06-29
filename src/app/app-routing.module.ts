import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';

const routes: Routes = [

  {
    path: '', redirectTo: 'register',
    pathMatch: 'full'
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'books', component: DashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
