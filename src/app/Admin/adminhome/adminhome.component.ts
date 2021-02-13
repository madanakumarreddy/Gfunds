import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AdminService } from "../../Services/Adminservice/admin/admin.service";
import { MemberService } from '../../Services/Memberservice/member.service';
import { ForemanfileService} from '../../Services/foremanupload/foremanfile.service';
import { Router } from "@angular/router";

declare var $: any;

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit { 

  constructor(public matdialog:MatDialog, 
              public adminserv:AdminService,
              private memserv:MemberService,
              private router:Router,
              public foremanUpload : ForemanfileService) {

   }



   public chit:any = {};
   public adminRequest;
   public Successregistrationforeman;

  ngOnInit() {

 if(this.memserv.updateProfilePic == "update"){
       this.router.navigate(["/dashboard/memberhome"])
     }
     if(this.foremanUpload.updateProfilePic == "update"){
       this.router.navigate(["/foreman/foremanhome"])
     }

    this.adminserv.upchit().subscribe(backdata => {
      console.log("alllllllllllll funds",backdata);
      this.chit = backdata;

    });
  }

  foremansignup(){
    const formnpop = this.matdialog.open(ForemanSignUp,{
    disableClose:true,
      width:"600px",
      height:"450px"

    });
    $(document).on('click',function(){
      $(' .collapse').collapse('hide');
    })
  }
   casignup(){
    const formnpop = this.matdialog.open(CaSignup,{
    disableClose:true,
      width:"600px",
      height:"450px"

    });

    $(document).on('click',function(){
      $(' .collapse').collapse('hide');
    })
  }

  manage(){
    $(document).on('click',function(){
      $(' .collapse').collapse('hide');
    })
  }

  chits(){
    $(document).on('click',function(){
      $(' .collapse').collapse('hide');
    })
  }

  member(){
    $(document).on('click',function(){
      $(' .collapse').collapse('hide');
    })
  }

  foreman(){
    $(document).on('click',function(){
      $(' .collapse').collapse('hide');
    })
  }
  executive(){
    $(document).on('click',function(){
      $(' .collapse').collapse('hide');
    })
  }
}


@Component({
  selector: 'foremansignuppop',
  templateUrl: './foremansignup.html',
  styleUrls: ['./adminhome.component.css']
})

export class ForemanSignUp {
  public error;


 keyPress(event: any) {
    const pattern = /[a-zA-Z\ ]/ ;
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

  constructor(public matdialogRe:MatDialogRef<ForemanSignUp>,
  public adminServ:AdminService) { }
  

  public button:Boolean;
  ngOnInit() {
   this.button = false
   console.log("buuuuuuuuuuuuu",this.button )
  }

public user:any = {};
saveData(userData){
  console.log("dattaaaaa in componentt",userData);


  userData.date=userData.date.toString();;
  console.log("savitriiiii",userData);


  this.matdialogRe.close();
  this.adminServ.createUser(userData).subscribe( backendData =>{
  console.log("dataaaa from backend",backendData);
  })
  error => console.log("errroorr",error)
}




// public user:any;
public otp1:any;
public box = false;
public exist = false;
public message = "";
generateotp(data){
  this.adminServ.getOtp(data).subscribe(responsedata =>{
  console.log("response data",responsedata)
  
  if(responsedata === "Already registered"){
    this.box=false;
      this.exist=true;
    this.message = "Mobile Number Already Registered"
  }
  else{
    this.box = true;
  }
  this.otp1 = responsedata;
  console.log("ver3333333333",this.otp1);

});
}


 verifyotp(userotp){
  console.log("verifyingggggggggggggggggggg",userotp,this.otp1);
  if(userotp==this.otp1){
    console.log("yeeesssssss");
  }
    }


    showbox(){
    console.log("inside showwwwwwwwww");
    this.box = true;
    }

    closepop(){
    this.matdialogRe.close();
    console.log("inside closepop");
    }

    membertemrsconditions(){
      console.log("helloooo");
    }
    privacy(){
      console.log("helo");
    }
    privacy1(){
      console.log("hello1");
    }
}
   




@Component({
  selector: 'casignup',
  templateUrl: './foremansignup.html',
  styleUrls: ['./adminhome.component.css']
})

export class CaSignup{

keyPress(event: any) {
    const pattern = /[a-zA-Z\ ]/ ;
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
   constructor(public matdialogRe:MatDialogRef<CaSignup>,
  public adminServ:AdminService){}

   public button:Boolean;
ngOnInit() {
  this.button = true
  console.log("buuuuuuuuuuuuu",this.button )
  }
    public error;
    public user:any = {};

saveCaData(userData){
  console.log("dattaaaaa in componentt",userData);
  
  this.matdialogRe.close();
  this.adminServ.createCa(userData).subscribe( backendData =>{
  console.log("dataaaa from backend",backendData);
  })
  error => console.log("errroorr",error)
}

public otp1:any;
public box = false;
public exist = false;
public message = "";
     generateotp(data){
  this.adminServ.getOtp(data).subscribe(responsedata =>{
  console.log("response data",responsedata)
   
  if (responsedata=== "Already registered") {
  this.box=false;
  this. exist = true;
  this.message = "Mobile Number Already Registered"
  }
   else{
    this.box = true;
  }
   this.otp1 = responsedata;
  console.log("ver3333333333",this.otp1);
});
}

verifyotp(userotp){
  console.log("verifyingggggggggggggggggggg",userotp,this.otp1);
  if(userotp==this.otp1){
    console.log("yeeesssssss");
  }
    }
    
    showbox(){
    console.log("inside showwwwwwwwww");
    this.box = true;
    }

    closepop(){
    this.matdialogRe.close();
    console.log("inside closepop");
    }
    membertemrsconditions(){
      console.log("helloooo");
    }
    privacy(){
      console.log("helo");
    }
    privacy1(){
      console.log("hello1");
    }
}