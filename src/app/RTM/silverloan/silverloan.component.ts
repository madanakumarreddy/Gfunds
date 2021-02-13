import { Component, OnInit } from '@angular/core';
import {RtmService} from '../../Services/Rtm/rtm.service';


@Component({
  selector: 'app-silverloan',
  templateUrl: './silverloan.component.html',
  styleUrls: ['./silverloan.component.css']
})
export class SilverloanComponent implements OnInit {

  constructor(public rtmserv:RtmService) { }
  public silverloan;
  public view;
  public p;
  public itemsPerPage = 10;
  ngOnInit() {
 this.getsilverloantype();
}
 	getsilverloantype(){
  	this.rtmserv.silverloantype().subscribe(data=>{
        console.log("loannnnnnnnnnnnnnnnnn",data);
        this.silverloan=data;
  });
}
}
