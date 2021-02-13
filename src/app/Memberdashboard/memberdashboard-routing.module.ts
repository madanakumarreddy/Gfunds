import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../Memberdashboard/dashboard/dashboard.component';
import { MemberhomeComponent } from '../Memberdashboard/memberhome/memberhome.component';
import { RunningfundsComponent, RunningfundsGraph, ForemanAuction } from '../Memberdashboard/runningfunds/runningfunds.component';
import { MemberuploadComponent } from '../Memberdashboard/memberupload/memberupload.component';
import { ClosedfundsComponent, ClosedGraphComponent } from '../Memberdashboard/closedfunds/closedfunds.component';
import { FundallotedComponent, FundalloteddetailsComponent } from '../Memberdashboard/fundalloted/fundalloted.component';
import { MemberfinalregistrationComponent } from '../Registration/memberfinalregistration/memberfinalregistration.component';
import { UpcomingfundsComponent } from '../Memberdashboard/upcomingfunds/upcomingfunds.component';
import { ViewmemberprofileComponent } from '../Memberdashboard/viewmemberprofile/viewmemberprofile.component';
import { TransactionhistoryComponent, memberTransaction } from '../Memberdashboard/transactionhistory/transactionhistory.component';
import { FundsummaryComponent, LoandetailsComponent } from '../Memberdashboard/fundsummary/fundsummary.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'memberhome',
        component: MemberhomeComponent
      },
      {
        path: 'runningfunds',
        component: RunningfundsComponent
      },
      {
        path: 'runninggraph',
        component: RunningfundsGraph
      },
      {
        path: "memberupload",
        component: MemberuploadComponent
      },
      {
        path: 'closedfunds',
        component: ClosedfundsComponent
      },
      {
        path: 'closedfundsgraph',
        component: ClosedGraphComponent

      },
      {
        path: 'fundalloted',
        component: FundallotedComponent
      },
      {
        path: 'fundalloteddetails',
        component: FundalloteddetailsComponent
      },
      {
        path: 'auctionpage',
        component: ForemanAuction
      },
      {
        component: MemberfinalregistrationComponent,
        path: "memberfinalreg"
      },
      {
        path: 'upcomingfunds',
        component: UpcomingfundsComponent
      },
      {
        path: "memberprofile",
        component: ViewmemberprofileComponent
      }, {
        path: "transactionhistory",
        component: TransactionhistoryComponent
      },
      {
        path: "membertransdetails",
        component: memberTransaction
      },

      {
        path: "fundsummary",
        component: FundsummaryComponent
      },
      {
        path: "loandetails",
        component: LoandetailsComponent
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberdashboardRoutingModule { }
