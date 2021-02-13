import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../Services/Memberservice/member.service';
import {Router} from "@angular/router";



@Component({
  selector: 'app-fundsummary',
  templateUrl: './fundsummary.component.html',
  styleUrls: ['./fundsummary.component.css']
})
export class FundsummaryComponent implements OnInit {

  constructor( public memservc:MemberService,private router : Router) { }



public swathi:any;
  ngOnInit() {
  	this.memservc.getFundDetails().subscribe(data => {
  		console.log("backdataaa1111111111111111",data);
  		this.swathi = data;
      console.log("rrrrrrrrrrrr",this.swathi)
  	});
  }

  loandetails(data){
    console.log("loandetaislll",data);
    this.memservc.sunn = data;

     this.router.navigate(['/dashboard/loandetails']);

  }

}

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./fundsummary.component.css']
})
export class LoandetailsComponent implements OnInit {

  constructor( public memservc:MemberService,private router : Router) { }

swa;
ngOnInit() {
    this.swa = this.memservc.sunn;
    console.log("swwwwwwwwwwwwwwww",this.swa);
  }


  goPrev(){
    this.router.navigate(['/dashboard/fundsummary']);
  }

  

}