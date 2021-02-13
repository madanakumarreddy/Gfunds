import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../Services/registrationservice/registration.service';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { from } from 'rxjs';
import { DatePipe } from '@angular/common';
export interface SignupData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog,public datetime:DatePipe, private router:Router,public reg:RegistrationService) { }
  public checkinglogdata;
  public showHeaderCompo;
  public showLogout;
  public error;
  ngOnInit() {
    // this.showHeaderCompo = true;
   var date = new Date();
    console.log(this.datetime.transform(date,"yyyy-MM-dd"));

    this.router.events.subscribe((event) =>{
      if (event instanceof NavigationEnd){

        console.log(event.url,"gtdddddidddd");
        if ((event.url == "/Adminhomepage") || 
            (event.url == "/Adminhomepage/Adminmanageteam") ||
            (event.url == "/Adminhomepage/Adminmanagechit") ||
            (event.url == "/Adminhomepage/Adminmanagemember") ||
            (event.url == "/Adminhomepage/Adminmanageforeman") ||
            (event.url == "/Adminhomepage/Adminmemberrequest") ||
            (event.url == "/Adminhomepage/Adminupcomingchits") ||
            (event.url == "/Adminhomepage/Adminmanageexcutive") ||
            (event.url == "/Adminhomepage/Foremanlist") ||
            (event.url == "/Adminhomepage/Admingraphdetails") ||
            (event.url == "/rtm-dashboard") ||
            (event.url == "/rtm-dashboard/rtmhome") ||
            (event.url == "/rtm-dashboard/loanrequest")||
            (event.url == "/rtm-dashboard/distributedloan") ||
            (event.url == "/rtm-dashboard/paymentinfo") ||
            (event.url == "/rtm-dashboard/rtmtracker")||
            (event.url == "/rtm-dashboard/silverloan")||
            (event.url == "/rtm-dashboard/goldloan")||
            (event.url == "/rtm-dashboard/platinumloan")||
            (event.url == "/ca")||
            (event.url == "/ca/cahome") || 
            (event.url == "/ca/camember") || 
            (event.url == "/ca/catransactions")||
            (event.url == "/ca/camemdeatils"))
    {
          this.showHeaderCompo = false;
          this.showLogout = true;

        }
        else {
          this.showHeaderCompo = true;
          this.showLogout = false;

        }
      }
    })
  }
  name:string;
  animal:string;

  signUpPopup(): void {
    const signupRef = this.dialog.open(SignupPop, {
      disableClose: true,
      width: '600px',
      height:'500px',
    });
  }
  logoutAdmin(){
    localStorage.clear();
    this.router.navigate(["/login"])
  }

}
@Component({
  selector: 'signup',
  templateUrl: './signUpPop.html',
  styleUrls: ['./header.component.css']
})
export class SignupPop {
    public error;
    
  keyPress1(event: any) {
    const pattern = /[6-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  keyPress2(event: any) {
const pattern = /[0-9]/;
let inputChar = String.fromCharCode(event.charCode);
if (event.keyCode != 8 && !pattern.test(inputChar)) {
event.preventDefault(); 
}
}
  keyPress(event: any) {
    const pattern = /[a-zA-Z\ ]/ ;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  
  public fullname:any = {};
    saveData(user,a){
      console.log("dateeeeeeeeee@@@@@@@@@@@@@@@@@",user,a)
      user.date_of_birth=user.date_of_birth.toString();
      this.signupRef.close();
      this.commModel.createUser(user).subscribe(data => {
      console.log("token verify bande",data);
    });
  }

  public show:boolean = false;
  public hhh:any = 'Show';
  constructor(
  public signupRef: MatDialogRef<SignupPop>,private commModel: RegistrationService, public datetime:DatePipe) {}

  public user:any={};
  public otp1:any;
  public box=false;
  public exist=false;
  public message="";
  generateotp(mob){
    console.log("in send otp component",mob);
    this.commModel.sendotp(mob).subscribe(data =>{
    console.log("ottttttttttt",data)
    if(data==="Already registered"){
      this.box=false;
      this.exist=true;
      this.message="Mobile is already registered";
    }
    else{
      this.box=true;
      
    }
    this.otp1=data
    });

  }
    keyup(){
      this.message = " "
    }

  verifyotp(userotp){
  console.log("verifyingggggggggggggggggggg",userotp,this.otp1);
  if(userotp==this.otp1){
    console.log("yeeesssssss");
  }
    }

  closepop() {
    console.log("popup closed");
    this.signupRef.close();
  }
}
