import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RtmDashboardComponent } from '../RTM/rtm-dashboard/rtm-dashboard.component';
import { RtmhomeComponent } from '../RTM/rtmhome/rtmhome.component';
import { LoanrequestComponent ,disAmount} from '../RTM/loanrequest/loanrequest.component';
import { LoanhistoryComponent } from '../RTM/loanhistory/loanhistory.component';
import { DistributedloanComponent } from '../RTM/distributedloan/distributedloan.component';
import { GoldloanComponent } from '../RTM/goldloan/goldloan.component';
import { PlatinumloanComponent } from '../RTM/platinumloan/platinumloan.component';
import { SilverloanComponent } from '../RTM/silverloan/silverloan.component';
import { PaymentinfoComponent } from '../RTM/paymentinfo/paymentinfo.component';
import { RtmTrackerComponent } from '../RTM/rtm-tracker/rtm-tracker.component';

const routes: Routes = [

{
  path:"",
  component:RtmDashboardComponent,
  children:[
  {
    path:"rtmhome",
    component:RtmhomeComponent,

  },

  {
    path:"loanrequest",
    component:LoanrequestComponent,
  },
  {
    path : "loanhistory",
    component:LoanhistoryComponent,
  },
  {
    path:"distributedloan",
    component:DistributedloanComponent,
  },
  {
    path:"goldloan",
    component:GoldloanComponent,
  },
  {
    path: "platinumloan",
    component: PlatinumloanComponent,
  },
  {
    path : "silverloan",
    component:SilverloanComponent,
  },
  {
    path:"paymentinfo",
    component:PaymentinfoComponent,
  },
  {
    path:"rtmtracker",
    component:RtmTrackerComponent,
  },


  ],
  },

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RtmRoutingModule { }
