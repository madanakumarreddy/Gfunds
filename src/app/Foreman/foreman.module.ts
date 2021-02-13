import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmembertofundComponent } from '../Foreman/assignmembertofund/assignmembertofund.component';
import { ForemanRoutingModule } from './foreman-routing.module';
import { AddedmembersComponent } from '../Foreman/assignmembertofund/addedmembers/addedmembers.component'
import { MemberreqestComponent } from '../Foreman/assignmembertofund/memberreqest/memberreqest.component';
import { ForemanclosedfundsComponent } from '../Foreman/foremanclosedfunds/foremanclosedfunds.component';
import { ForemandashboardComponent } from '../Foreman/foremandashboard/foremandashboard.component';
import { ForemanhomeComponent,AuctionDetails,AuctiontransactionsDetails,MemberDetails} from '../Foreman/foremanhome/foremanhome.component';
import { ForemanregistrationComponent} from '../Foreman/foremanregistration/foremanregistration.component';
import { ForemanrunningfundsComponent,ForemangraphComponent,ForemanauctionpageComponent } from '../Foreman/foremanrunningfunds/foremanrunningfunds.component';
import { GraphviewComponent } from '../Foreman/graphview/graphview.component';
import { StartnewfundComponent,newchit,chitpopup } from '../Foreman/startnewfund/startnewfund.component';
import { TransactionsComponent } from '../Foreman/transactions/transactions.component';
import { UploaddocumentsComponent } from '../Foreman/uploaddocuments/uploaddocuments.component';
import { ViewprofileComponent } from '../Foreman/viewprofile/viewprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { ScrollToModule } from 'ng2-scroll-to-el';


@NgModule({
  imports: [
    CommonModule,
    ForemanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxPaginationModule,
    ScrollToModule.forRoot(),
    NgbModule.forRoot(),

  ],
  declarations: [
	    AssignmembertofundComponent,
	    AddedmembersComponent,
	    MemberreqestComponent,
	    ForemanhomeComponent,
	    StartnewfundComponent,newchit,chitpopup,
	    GraphviewComponent,
	    ForemanclosedfundsComponent,
	    ForemanrunningfundsComponent,
	    ForemanauctionpageComponent,
	    ForemangraphComponent,
	    ForemandashboardComponent,
	    ViewprofileComponent,
	    TransactionsComponent,
	    ForemanregistrationComponent,
	    ForemanregistrationComponent,
	    UploaddocumentsComponent,
	    AuctionDetails,
	    AuctiontransactionsDetails,
	    MemberDetails,
],

entryComponents: [
	AuctionDetails,
	AuctiontransactionsDetails,
	MemberDetails,
	newchit,
	chitpopup
    ],

  exports: [MaterialModule],

  providers: [DatePipe],
})
export class ForemanModule { }
