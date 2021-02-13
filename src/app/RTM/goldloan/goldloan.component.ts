import { Component, OnInit } from '@angular/core';
import { RtmService } from '../../Services/Rtm/rtm.service';

@Component({
  selector: 'app-goldloan',
  templateUrl: './goldloan.component.html',
  styleUrls: ['./goldloan.component.css']
})
export class GoldloanComponent implements OnInit {
  public p;
  public itemPerPage = 10;

  constructor(public rtmserv: RtmService) { }
  public goldloan;
  public view;
  ngOnInit() {
    this.getgoldloantype();
  }
  getgoldloantype() {
    this.rtmserv.goldloantype().subscribe(data => {
      console.log("loannnnnnnnnnnnnnnnnn", data);
      this.goldloan = data;
    });
  }

}
