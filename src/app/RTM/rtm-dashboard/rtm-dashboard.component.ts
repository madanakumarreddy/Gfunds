import { Component, OnInit } from '@angular/core';
import { RtmService } from 'src/app/Services/Rtm/rtm.service';
declare var $: any;
@Component({
  selector: 'app-rtm-dashboard',
  templateUrl: './rtm-dashboard.component.html',
  styleUrls: ['./rtm-dashboard.component.css']
})
export class RtmDashboardComponent implements OnInit {
	public count;
  public loandetails:any;

  constructor(public rtmserv:RtmService) { }

  ngOnInit() {
  }
  // public getdisburseloan(){
  //   this.rtmserv.rtmloan_status().subscribe(data=>{
  //       console.log("loannnnnnnnnnnnnnnnnn",data);
  //       this.loandetails=data.length;
  //       console.log("loandetailssss",this.loandetails);
  //       this.rtmserv.serdata = data;

  //     });
  // }

  member(){
    $(document).on('click',function(){
      $(' .collapse').collapse('hide');
    })
  }

}
