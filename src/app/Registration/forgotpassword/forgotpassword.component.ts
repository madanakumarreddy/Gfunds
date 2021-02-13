import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { RegistrationService } from '../../Services/registrationservice/registration.service'; 
import {Router} from "@angular/router";

declare var $;
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
errorStr = '';

  constructor(private router: Router,public register:RegistrationService) { }
  @ViewChild('Changepassword') Changepassword:ElementRef;


  ngOnInit() {
  }
  public message;
  public utility:any = {};
  public otp2:any = '';
  public showotp = false;
  resetpassword(data){
  	// this.showotp =true; 
  	console.log("lllllllllllll",data);
  	this.register.forgot(data).subscribe(data =>{
  		console.log("daraaaaaaa",data);
      if(data==="Mobile Number doesnt exist"){
       this.showotp =false; 
        this.message="Mobile Number doesnt exist";
      }
      else{
        this.showotp =true; 
        

      }
  	});
  }
public message1;

  public shownew = false;
  enterOTP(data){
  	// this.shownew = true;
  	console.log("saaaaaaaa",data);
  	this.register.verifyuser(data).subscribe(data =>{
  		console.log("kkkkkksssssss",data);

      if(data=="OTP verified"){
        this.shownew = true;
       
      }
      else{
        this.shownew = false;
         this.message1="Invalid OTP";
      }
  	})
  }

  public en1:boolean=true;
  aaa(evt){

console.log("displaying evt and utility password", evt, this.utility.password);
  if(this.utility.password!=evt){
    this.en1=false;
    this.errorStr = "Passwords do not match";
  }else  {
    this.errorStr = "Passwords match";
    }
}

  public finalPass = {};
  public successpassword;
  public showpop = true;
  enterPassword(data){
    
  	this.register.reset(data).subscribe(data =>{
       console.log("daaaaaaa",data);
       this.successpassword = data;
       $(this.Changepassword.nativeElement).modal('show');
  	});
  }
 
  gotodash(){
       this.router.navigate(['./login']);
  }

}
