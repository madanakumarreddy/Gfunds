
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { CaServiceService } from "../../Services/CaService/ca-service.service";


import { ForemanfileService } from '../../Services/foremanupload/foremanfile.service'

@Component({
  selector: 'app-camembers',
  templateUrl: './camembers.component.html',
  styleUrls: ['./camembers.component.css']
})
export class CamembersComponent implements OnInit {
  membersadded: any;
  public dateTime;
  disabledauction: any;
  somePlaceholder: string = "Set Auction Time";
  @ViewChild('verifytrans') verifytrans: ElementRef;
  @ViewChild('verifytrans1') verifytrans1: ElementRef;
  constructor(public router: Router, private data: ForemanfileService, private caser: CaServiceService) { }
  chitid1: any;
  public finalchit: any;
  public cnt;
  public val;
  ngOnInit() {
    this.members();
  }
  members() {
    this.chitid1 = JSON.parse(decodeURIComponent(localStorage.getItem('idchit')));
    this.chitid1['status'] = "";
    console.log("kkkkkkkkkkkkkk", this.chitid1);
    //   this.data.addedmembers(this.chitid1).subscribe(data=>{
    //     console.log("added members",data);
    //     this.membersadded=data.member;
    //     this.disabledauction=data.AUCTION;
    //     this.finalchit = data.chitsid;
    // })
    this.caser.getcompletedauctions(this.chitid1).subscribe(data => {

      console.log("!!!!!!!!!!!!!!!!", data['data'][0].chit)
      this.val = data;
      console.log("nnnnnnnnn", this.val);
      //  console.log('ytryrytryt',this.val.data[0].auction_c)
      this.cnt = data['data'];

    })
  }
  public newid: string;
  addedmemback() {
    this.router.navigate(['./ca/cahome']);
  }



  getmembertrans(data1, data2) {
    console.log("222222222222", data1, data2);
    var transdata = { "auction": data1, "fund_id": data2 }
    this.data.adt = transdata;
    localStorage.setItem('transdata', encodeURIComponent(JSON.stringify(transdata)));
    this.router.navigate(['./ca/camemdetails']);

  }

}
