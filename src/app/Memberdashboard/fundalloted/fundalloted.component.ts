import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../Services/Memberservice/member.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fundalloted',
  templateUrl: './fundalloted.component.html',
  styleUrls: ['./fundalloted.component.css']
})
export class FundallotedComponent implements OnInit {

  constructor(public memberservice:MemberService, public router:Router) { }
  public alloteddetails;
  ngOnInit() {
  	this.memberservice.fetchauctiondetails().subscribe(data => {
  		console.log("*****************",data)
  		// this.alloteddetails = data['chit_dict']
      this.alloteddetails = data;

  	})
  }


  
  transmemberchit1(data){
    console.log("dataaaaaaaaaaa@@@@@@@@########",data);
    this.memberservice.getParticularTrans(data).subscribe(badata => {
      console.log("GET PARRTICULAR CHITTTTTTTTTTTTTTTTT",badata);
      // this.allTransData = badata;
       this.memberservice.fundtransact = badata;
    this.router.navigate(['dashboard/fundalloteddetails'])
    });
  }
}

@Component({
  selector: 'app-fundalloteddetails',
  templateUrl: './fundalloteddetails.component.html',
  styleUrls: ['./fundalloted.component.css']
})
export class FundalloteddetailsComponent implements OnInit {
  constructor(public memberservice:MemberService, public router:Router) { }
  fundata;
   ngOnInit() {
     this.fundata = this.memberservice.fundtransact;
     console.log("funnnnnnnnnnnnnnnnnn",this.fundata)
  }
   memchitaucback(){
    this.router.navigate(['/dashboard/fundalloted'])
  }
}