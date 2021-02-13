import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadashboardComponent } from '../CA_Audit/cadashboard/cadashboard.component';
import { CaMemberDetailsComponent } from '../CA_Audit/ca-member-details/ca-member-details.component';
import { CahomeComponent } from '../CA_Audit/cahome/cahome.component';
import { CamembersComponent } from '../CA_Audit/camembers/camembers.component';
import { CatransactionsComponent } from '../CA_Audit/catransactions/catransactions.component';
const routes: Routes = [
  {
    path:'',
    component:CadashboardComponent,
    children : [
      {
        path : 'cahome',
        component : CahomeComponent
      },
      {
        path :'camember',
        component :  CamembersComponent
      },
      {
        path : 'catransactions',
        component : CatransactionsComponent
      },
      {
        path : 'camemdetails',
        component : CaMemberDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaAuditRoutingModule { }
