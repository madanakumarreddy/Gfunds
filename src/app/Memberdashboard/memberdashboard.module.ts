import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import { MemberdashboardRoutingModule } from './memberdashboard-routing.module';
import { ClosedfundsComponent,ClosedGraphComponent } from '../Memberdashboard/closedfunds/closedfunds.component';
import { DashboardComponent } from '../Memberdashboard/dashboard/dashboard.component';
import { FundallotedComponent,FundalloteddetailsComponent } from '../Memberdashboard/fundalloted/fundalloted.component';
import { FundsummaryComponent,LoandetailsComponent } from '../Memberdashboard/fundsummary/fundsummary.component';
import { MemberhomeComponent } from '../Memberdashboard/memberhome/memberhome.component';
import { MemberuploadComponent } from '../Memberdashboard/memberupload/memberupload.component';
import {  RunningfundsComponent,RunningfundsGraph,ForemanAuction,AuctDialog} from '../Memberdashboard/runningfunds/runningfunds.component';
import { TransactionhistoryComponent,memberTransaction} from '../Memberdashboard/transactionhistory/transactionhistory.component';
import { chitdetails,sendRequest,RequestdFunds} from '../Memberdashboard/upcomingfunds/upcomingfunds.component';
import { ViewmemberprofileComponent } from '../Memberdashboard/viewmemberprofile/viewmemberprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { MemberfinalregistrationComponent } from '../Registration/memberfinalregistration/memberfinalregistration.component';

import { UpcomingfundsComponent } from '../Memberdashboard/upcomingfunds/upcomingfunds.component';


@NgModule({
  imports: [
    CommonModule,
    MemberdashboardRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ScrollToModule.forRoot(),
    NgbModule.forRoot(),

  ],
  declarations: [
  	chitdetails,
  	DashboardComponent,
    RunningfundsComponent,
    AuctDialog,
    FundallotedComponent,
    FundalloteddetailsComponent,
    RequestdFunds,
    ClosedfundsComponent,ClosedGraphComponent,
    TransactionhistoryComponent,memberTransaction,
    MemberhomeComponent,
    sendRequest,
    ViewmemberprofileComponent,
    FundsummaryComponent,
    LoandetailsComponent,
    MemberuploadComponent,
    RunningfundsGraph,
    ForemanAuction,AuctDialog,
    MemberfinalregistrationComponent,
    UpcomingfundsComponent,

  ],

  entryComponents: [
    chitdetails,
    DashboardComponent,
    sendRequest,
    RunningfundsGraph,
    ForemanAuction,RequestdFunds,AuctDialog,
    memberTransaction,
    FundalloteddetailsComponent,
    MemberfinalregistrationComponent,
    
    ],
    exports: [MaterialModule],
  bootstrap: [],

  providers: [DatePipe],

})
export class MemberdashboardModule { }
