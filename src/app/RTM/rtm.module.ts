import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistributedloanComponent } from '../RTM/distributedloan/distributedloan.component';
import { GoldloanComponent } from '../RTM/goldloan/goldloan.component';
import { LoanhistoryComponent } from '../RTM/loanhistory/loanhistory.component';
import { LoanrequestComponent,disAmount } from '../RTM/loanrequest/loanrequest.component';
import { PaymentinfoComponent } from '../RTM/paymentinfo/paymentinfo.component';
import { PlatinumloanComponent } from '../RTM/platinumloan/platinumloan.component';
import { RtmhomeComponent } from '../RTM/rtmhome/rtmhome.component';
import { SilverloanComponent } from '../RTM/silverloan/silverloan.component';
import { RtmTrackerComponent } from '../RTM/rtm-tracker/rtm-tracker.component';
import { RtmRoutingModule } from './rtm-routing.module';
import { RtmDashboardComponent } from '../RTM/rtm-dashboard/rtm-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  imports: [
    CommonModule,
    RtmRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxPaginationModule
  ],
  declarations: [
   	RtmDashboardComponent,
    RtmhomeComponent,
    LoanrequestComponent,
    LoanhistoryComponent,
    DistributedloanComponent,
    SilverloanComponent,
    GoldloanComponent,
    PlatinumloanComponent,
    PaymentinfoComponent,
    RtmTrackerComponent,
    disAmount
    ],

   entryComponents: [
        disAmount
   ]
})
export class RtmModule { }
