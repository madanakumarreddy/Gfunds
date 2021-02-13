import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Router} from "@angular/router";
import {ForemanfileService} from '../../../Services/foremanupload/foremanfile.service';
import { RegistrationService } from '../../../Services/registrationservice/registration.service';
declare var $;
@Component({
  selector: 'app-memberreqest',
  templateUrl: './memberreqest.component.html',
  styleUrls: ['./memberreqest.component.css']
})
export class MemberreqestComponent implements OnInit {


  @ViewChild('AddedMem') AddedMem:ElementRef
   @ViewChild('AddedMem1') AddedMem1:ElementRef
    @ViewChild('AddedMem2') AddedMem2:ElementRef

  constructor(public router:Router,private data: ForemanfileService, public regser : RegistrationService) { }
  message:any;
memreqobject:any;
public credit1;
public credit;
public credit2;
public chit_id;

public retRes;
  ngOnInit() {
      this.requestedmembers()
      this.regser.dashboarddetails().subscribe(data => {
        console.log("!@#######@@@!!!!!!!!!@@@@@#########",data);
      });

  }
  requestedmembers(){
    // this.data.currentMessage.subscribe(message => this.message = message);

      var obj=JSON.parse(decodeURIComponent(localStorage.getItem('idchit')));
      console.log("testttt",obj)
       this.data.addmembers(obj).subscribe(data=>{

         console.log("Nanduuuuu",data);
         this.memreqobject=data.data;
         console.log("tttttttttttttttt",this.memreqobject)

     })

  }
memmanagement(){
     this.router.navigate(['./foreman/foremanassignmember']);
}
addedmembers1(a){
  this.router.navigate(['./foreman/addedmembers']);
}
getRating(n){
 var a = [];
        if (n != null) {
            a = new Array(parseInt(n));
        }

        return a;
    };
    addreq(req) {
       req["status"]=  "ADD";
        this.data.addreq(req).subscribe(data=>{
            console.log("MAHESHHHHHHHHHHHHHHHHHH",data);
            if(data=="Member credit limit is very low, Contact member or view member credit details. "){
              console.log("inside credit.....");
              this.credit = data;
               $(this.AddedMem.nativeElement).modal('show')
            }
            else if(data=="As per your chit members limit crossed"){
              console.log("inside limit.....");
              this.credit1 = data;
               $(this.AddedMem1.nativeElement).modal('show')
            }
            else{
              console.log("inside elseeeeeeeeeeeee.....")
              this.credit2 = data.foremanres;
               $(this.AddedMem2.nativeElement).modal('show')
            }
            this.requestedmembers();
        })
    }

modelImg:any;
cibilscores(reg){
  console.log(reg + "ffff")
  this.modelImg = reg;
}




  rejectreq(req) {
       req["status"]=  "REJECT";
       req["id2"]=  "id";

        this.data.addreq(req).subscribe(data=>{
            // alert(data);
            this.requestedmembers();
        })
    }


};




