import { Component, OnInit } from '@angular/core';
import  {ForemanfileService} from '../../Services/foremanupload/foremanfile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ca-member-details',
  templateUrl: './ca-member-details.component.html',
  styleUrls: ['./ca-member-details.component.css']
})
export class CaMemberDetailsComponent implements OnInit {

  constructor(private foreserv:ForemanfileService,public router:Router) { }
  public showmembertrans;

  ngOnInit() {


  	var chit = JSON.parse(decodeURIComponent(localStorage.getItem('transdata')));
    console.log("rrrrrrrrr",chit);
    this.foreserv.retrievetransactions(chit).subscribe(data => {
     this.showmembertrans= data;
     console.log("responnnnnnnnnn",data);
   

    })
  }

   backToAuction(){
   this.router.navigate(['./ca/camember']);
  }

}
