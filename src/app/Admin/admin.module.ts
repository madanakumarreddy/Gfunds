import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent,ForemanSignUp, CaSignup } from '../Admin/adminhome/adminhome.component';
import { ManagechitComponent,ManageChitPop } from '../Admin/managechit/managechit.component';
import { ManageexcutiveComponent } from '../Admin/manageexcutive/manageexcutive.component';
import { ManageforemanComponent,viewForeman,AdmingraphComponent } from '../Admin/manageforeman/manageforeman.component';
import { ManagememberComponent,memberregdetail } from '../Admin/managemember/managemember.component';
import { ManageteamComponent } from '../Admin/manageteam/manageteam.component';
import { ManageupcomingchitsComponent,fraternitydetails } from '../Admin/manageupcomingchits/manageupcomingchits.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { AdminRoutingModule } from './admin-routing.module';
import { DatePipe } from '@angular/common';
import { FilterPipe } from '../FilterPipe1/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ScrollToModule.forRoot(),
    NgbModule.forRoot(),
    AdminRoutingModule,
    MaterialModule,
    // FilterPipe
  ],
  declarations: [
  	AdminhomeComponent,
    ManageupcomingchitsComponent,
    ManageteamComponent,
    ManagememberComponent,
    ManageforemanComponent,viewForeman,AdmingraphComponent,
    ManagechitComponent,
    ManageexcutiveComponent,
    memberregdetail,
    ManageChitPop,
    ForemanSignUp,
    ManageChitPop,
    memberregdetail,
    viewForeman,
    fraternitydetails,
    FilterPipe,
    CaSignup
    
  ],

  entryComponents: [
    ForemanSignUp,
    memberregdetail,
    ManageChitPop,
    CaSignup,
    viewForeman,
    fraternitydetails
    ],

  exports: [MaterialModule],
  bootstrap: [],

  providers: [DatePipe],
})
export class AdminModule { }
