import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Registration/login/login.component';
import { HomeComponent } from './Registration/home/home.component';
import { ForgotpasswordComponent } from './Registration/forgotpassword/forgotpassword.component';
import { from } from 'rxjs';
import { HomeupcomingfundsComponent } from './Registration/homeupcomingfunds/homeupcomingfunds.component';
import { FraternityfundComponent } from './Registration/fraternityfund/fraternityfund.component';
import { UpcomingfundsComponent } from './Memberdashboard/upcomingfunds/upcomingfunds.component';
import { HomerunningfundsComponent } from './Registration/homerunningfunds/homerunningfunds.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: "login"
  },

  {
    component: HomeComponent,
    path: ""
  },

  {
    component: ForgotpasswordComponent,
    path: "forgotpswd"
  },

  {
    component: HomeupcomingfundsComponent,
    path: "upcomingfunds"
  },
  {
    component: HomerunningfundsComponent,
    path: "runningfunds"
  },

  {
    component: FraternityfundComponent,
    path: "fraternityfund"
  },

  {
    path: 'foreman',
    loadChildren: './Foreman/foreman.module#ForemanModule'
  },

  {
    path: 'Adminhomepage',
    loadChildren: './Admin/admin.module#AdminModule'
  },

  {
    path: 'dashboard',
    loadChildren: './Memberdashboard/memberdashboard.module#MemberdashboardModule'
  },

  {
    path: 'rtm-dashboard',
    loadChildren: './RTM/rtm.module#RtmModule'
  },

  {
    path: 'ca',
    loadChildren: './CA_Audit/ca-audit.module#CaAuditModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
