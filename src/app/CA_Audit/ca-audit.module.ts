import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadashboardComponent } from '../CA_Audit/cadashboard/cadashboard.component';
import { CaMemberDetailsComponent } from '../CA_Audit/ca-member-details/ca-member-details.component';
import { CaAuditRoutingModule } from './ca-audit-routing.module';
import { CahomeComponent } from '../CA_Audit/cahome/cahome.component';
import { CamembersComponent } from '../CA_Audit/camembers/camembers.component';
import { CatransactionsComponent } from '../CA_Audit/catransactions/catransactions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from '../FilterPipe/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    CaAuditRoutingModule,
    FormsModule,ReactiveFormsModule,
    MaterialModule,
    NgxPaginationModule,
    NgbModule,
    // FilterPipe
  ],
  declarations: [
    CaMemberDetailsComponent,
    CadashboardComponent,
    CahomeComponent,
    CamembersComponent,
    CatransactionsComponent,
    FilterPipe
  ],
  exports: [MaterialModule],
})
export class CaAuditModule { }
