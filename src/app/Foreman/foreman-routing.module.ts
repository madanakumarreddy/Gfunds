import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForemandashboardComponent } from '../Foreman/foremandashboard/foremandashboard.component';
import { ForemanregistrationComponent } from '../Foreman/foremanregistration/foremanregistration.component';
import { StartnewfundComponent } from '../Foreman/startnewfund/startnewfund.component';
import {  GraphviewComponent } from '../Foreman/graphview/graphview.component';
import { AssignmembertofundComponent } from '../Foreman/assignmembertofund/assignmembertofund.component';
import { ForemanclosedfundsComponent } from '../Foreman/foremanclosedfunds/foremanclosedfunds.component';
import { ForemanrunningfundsComponent ,ForemangraphComponent,ForemanauctionpageComponent} from '../Foreman/foremanrunningfunds/foremanrunningfunds.component';
import { ForemanhomeComponent,AuctionDetails,AuctiontransactionsDetails,MemberDetails } from '../Foreman/foremanhome/foremanhome.component';
import { ViewprofileComponent } from '../Foreman/viewprofile/viewprofile.component';
import {  TransactionsComponent} from '../Foreman/transactions/transactions.component';
import { UploaddocumentsComponent}from '../Foreman/uploaddocuments/uploaddocuments.component';
import { MemberreqestComponent } from '../Foreman/assignmembertofund/memberreqest/memberreqest.component';
import { AddedmembersComponent } from '../Foreman/assignmembertofund/addedmembers/addedmembers.component';


const routes: Routes = [



  {
    path: '',
    
     component:  ForemandashboardComponent,
    children: [
    {
    path:'foremanreg',
    component:ForemanregistrationComponent
  },
       {
       path: 'foremannewfund',
       component: StartnewfundComponent  },
       {
       path: 'foremangraphview',
       component:  GraphviewComponent },
       {
       path: 'foremanassignmember',
       component: AssignmembertofundComponent },
       {
       path: 'foremanclosedfund',
       component:ForemanclosedfundsComponent },
        {
       path: 'foremanrunningfund',
       component: ForemanrunningfundsComponent },
       {
       path: 'foremanauction',
       component: ForemanauctionpageComponent },

     {
       path: 'foremanrunningraph',
       component: ForemangraphComponent },

       {
        path: 'foremanhome',
        component: ForemanhomeComponent },
        {
        path: 'auctiondetails',
        component: AuctionDetails },

        {
         path: 'transauction',
         component : AuctiontransactionsDetails
        },
        {
          path:'memberdetails',
          component : MemberDetails

        },

        {
        path: 'profile',
        component:  ViewprofileComponent},
        {
         path: 'transaction',
         component: TransactionsComponent },
       {
        path: 'upload',
        component: UploaddocumentsComponent },
        {
        path: 'memberreq',
        component: MemberreqestComponent },
        {
        path: 'addedmembers',
        component: AddedmembersComponent },
   ],

   },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForemanRoutingModule { }
