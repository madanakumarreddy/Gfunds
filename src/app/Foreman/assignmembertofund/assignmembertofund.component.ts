import { Component, OnInit } from '@angular/core';
import {ForemanfileService} from '../../Services/foremanupload/foremanfile.service'
import {Router} from "@angular/router";
@Component({
  selector: 'app-assignmembertofund',
  templateUrl: './assignmembertofund.component.html',
  styleUrls: ['./assignmembertofund.component.css']
})
export class AssignmembertofundComponent implements OnInit {

  constructor(public reg:ForemanfileService,public router:Router) { }
public requestedchits:any;
public assignfnd=true;
message:any;
  ngOnInit() {
    this.reg.foremanrequestedchits().subscribe(data=>{
      console.log("sitarro ke jahan me",data)
      this.requestedchits=data.chit_dict;
      console.log("Savitriii",this.requestedchits)
    });
    // this.reg.currentMessage.subscribe(message => this.message = message)
  }
addMembers(chitid){
     let chitobject = { "chit": chitid };
     this.reg.changeMessage(chitobject);
     // this.reg.sendchitid(chitobject);
     localStorage.setItem('idchit',encodeURIComponent(JSON.stringify(chitobject)));
       this.router.navigate(['./foreman/memberreq']);
}

addedmembers(chitid){
     let chitobject = { "chit": chitid };
     // this.reg.sendchitid(chitobject);
     localStorage.setItem('idchit',encodeURIComponent(JSON.stringify(chitobject)));

      this.router.navigate(['./foreman/addedmembers']);
}
}
