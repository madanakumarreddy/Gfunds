import { Component, OnInit,Inject,ElementRef,ViewChild } from '@angular/core';
import {MemberService} from '../../Services/Memberservice/member.service';
import { ForemanfileService } from '../../Services/foremanupload/foremanfile.service'
import {Router} from "@angular/router";
import * as Charts from 'chart.js';
declare var $: any;


@Component({
  selector: 'app-foremanclosedfunds',
  templateUrl: './foremanclosedfunds.component.html',
  styleUrls: ['./foremanclosedfunds.component.css']
})
export class ForemanclosedfundsComponent implements OnInit {
@ViewChild('closdchit') closdchit:ElementRef;
  constructor(private memservice: MemberService,public foremanserv:ForemanfileService,public router:Router) { }

  ngOnInit() {
      this.closedchit();
  }
  public closed;
  public itemsPerPage123;
  public p;
  public userpag;
closedchit(){
  this.foremanserv.foreclosedchits().subscribe(data=>{
    console.log("sSSSssssssssssssss",data)
    this.closed=data['data']
    console.log("finSSSSSSSSSSSSSAAAAAAAAAAAAAAAA",this.closed);
})

}

public closeddata;
getClosedChits(data){
	this.closeddata= data;
	console.log("kkkkkkkkk",this.closeddata);
	 $(this.closdchit.nativeElement).modal('show');

}

}




