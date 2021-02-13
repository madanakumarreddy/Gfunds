import { Component, OnInit } from '@angular/core';
import {CaServiceService} from '../../Services/CaService/ca-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cahome',
  templateUrl: './cahome.component.html',
  styleUrls: ['./cahome.component.css']
})
export class CahomeComponent implements OnInit {

  constructor(public reg:CaServiceService,
              public router:Router) { }

  public requestedchits:any;
  message:any;
  public searchText = '';

  ngOnInit() {
    this.reg.cachits().subscribe(data=>{
      console.log("ca_dataaaaaaaaaa",data);
      this.requestedchits=data;
      console.log("ts file",this.requestedchits)  
      });
  }
  totalAuctions(chitid){
    let chitobject = { "chit":chitid.id, "foreman_id":chitid.foreman_id };
    
    localStorage.setItem('idchit',encodeURIComponent(JSON.stringify(chitobject)));

    this.router.navigate(['./ca/camember']);
}
  

}
