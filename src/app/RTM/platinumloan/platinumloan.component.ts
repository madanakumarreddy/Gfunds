import { Component, OnInit } from '@angular/core';
import {RtmService} from '../../Services/Rtm/rtm.service';

@Component({
  selector: 'app-platinumloan',
  templateUrl: './platinumloan.component.html',
  styleUrls: ['./platinumloan.component.css']
})
export class PlatinumloanComponent implements OnInit {

  constructor(public rtmserv:RtmService) { }

 public platinumloan;
 public p;
 public itemsPerPage = 10;

  ngOnInit() {
 this.getplatinumloantype();
}
 	getplatinumloantype(){
  	this.rtmserv.platinumloantype().subscribe(data=>{
        console.log("loannnnnnnnnnnnnnnnnn",data);
        this.platinumloan=data;
  });
}

}
