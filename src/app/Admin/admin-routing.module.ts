import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from '../Admin/adminhome/adminhome.component';
import { ManageupcomingchitsComponent } from '../Admin/manageupcomingchits/manageupcomingchits.component';
import { ManageteamComponent } from '../Admin/manageteam/manageteam.component';
import { ManagememberComponent } from '../Admin/managemember/managemember.component';
import { ManageforemanComponent,AdmingraphComponent } from '../Admin/manageforeman/manageforeman.component';
import { ManagechitComponent } from '../Admin/managechit/managechit.component';
import { ManageexcutiveComponent } from '../Admin/manageexcutive/manageexcutive.component';


const routes: Routes = [
{
  path:'',
  component:AdminhomeComponent,
  children:[

    {
       path:"Adminupcomingchits",
       component:ManageupcomingchitsComponent
       },
       {
         path:"Adminmanageteam",
       component:ManageteamComponent
       },

       {
         path:"Adminmanagemember",
         component:ManagememberComponent
       },
       {
         path:"Adminmanageforeman",
         component:ManageforemanComponent
       },
       {
          path:"Admingraphdetails",
         component:AdmingraphComponent

       },

       {
         path:"Adminmanagechit",
         component:ManagechitComponent
       },
       {
         path:"Adminmanageexcutive",
         component:ManageexcutiveComponent
      },


  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
