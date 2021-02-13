import { Component, OnInit,ElementRef,ViewChild  } from '@angular/core';
import {Router} from "@angular/router";
import {ForemanfileService} from '../../../Services/foremanupload/foremanfile.service'


declare var $;
@Component({
  selector: 'app-addedmembers',
  templateUrl: './addedmembers.component.html',
  styleUrls: ['./addedmembers.component.css']
})
export class AddedmembersComponent implements OnInit {
membersadded:any;
public dateTime;
disabledauction:any;
somePlaceholder : string = "Set Auction Time";

  @ViewChild('verifytrans') verifytrans:ElementRef;
@ViewChild('verifytrans1') verifytrans1:ElementRef;
  constructor(public router:Router,private data: ForemanfileService) { }
chitid1:any;
public finalchit:any;
  ngOnInit() {
      this.members();
  }
  members(){
    this.chitid1=JSON.parse(decodeURIComponent(localStorage.getItem('idchit')));
      this.chitid1['status']="";
       this.data.addedmembers(this.chitid1).subscribe(data=>{
         console.log("added members",data);
         this.membersadded=data.member;
         this.disabledauction=data.AUCTION;
         this.finalchit = data.chitsid;
     })
  }
  public newid:string;
addedmemback(){
  this.router.navigate(['./foreman/memberreq']);
}
rejectmember(data,a){
let finaldata = {"data":data,"status":a}
console.log("hhhhhhhhhhhhhhh",data);
this.data.memberreject(finaldata).subscribe(backdata=>{
this.ngOnInit();
  
});
// this.members();
}
public transdata:any={}
verifytransaction(data){
  this.transdata=data;
  console.log("wwwwwwww",data);
  $(this.verifytrans.nativeElement).modal('show');

}
entertransaction(data){
  this.transdata=data;
    $(this.verifytrans1.nativeElement).modal('show');
}

approvetans(a){
this.transdata['status']=a;
  this.data.approvetans(this.transdata).subscribe(data=>{
    // alert(data.res);
    this.members();
  })
}

public selecteddate;
setAuction(event){
  console.log("hhhhhhdddd44444444444",event.toString().slice(0,24));
  let data = {"event":event.toUTCString(),"id":this.finalchit}
  this.data.setauctiondate(data).subscribe(data =>{
    console.log("return data",data)
  })
}


savetrans(a){
  console.log("bbbbbbbbbbbbbbbbbbbb",a);
a['status']="newid";

console.log("aaaaaaaaaa",a);
  this.data.approvetans(a).subscribe(data=>{
    // alert(data.res);
    this.members();
  })
}
}
