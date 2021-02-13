import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../Services/Adminservice/admin/admin.service';

@Component({
  selector: 'app-manageexcutive',
  templateUrl: './manageexcutive.component.html',
  styleUrls: ['./manageexcutive.component.css']
})
export class ManageexcutiveComponent implements OnInit {

  constructor(private adminserv:AdminService) { }

  ngOnInit() {

    this.executiveinfo();
  }

  public executInfo:any = [];

  executiveinfo(){
    this.adminserv.getexecutivedata().subscribe(backData => {
      console.log("executive infoooooooooooooooooooo",backData)
       this.executInfo=backData;
    });
    }
}
