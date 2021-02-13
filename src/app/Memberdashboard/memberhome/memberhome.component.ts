import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { MemberService } from '../../Services/Memberservice/member.service';
import { RegistrationService } from '../../Services/registrationservice/registration.service';
import * as Charts from 'chart.js';
import {Router} from "@angular/router";

declare var $;



@Component({
  selector: 'app-memberhome',
  templateUrl: './memberhome.component.html',
  styleUrls: ['./memberhome.component.css']
})
export class MemberhomeComponent implements OnInit {
	title = "Graph View"
	LineChart = [];
  public mesdisp;
 @ViewChild('PopRes1') PopRes1:ElementRef;

public graphmes;
public chtup;
public disp = false;


  constructor(public memServ:MemberService, public registerSe:RegistrationService, private router: Router) { }
profPPic;

  ngOnInit() {

   

    this.memServ.Profilepic().subscribe(data =>{
      console.log("profileeeeeepicccccccccc",data);
      this.profPPic = data['finalpic']
      this.graphmes = data['chitdetails']
      this.chtup = data['chtup'][0].status
      this.registerSe.MyProfile = this.profPPic;
      if (this.chtup == "UPCOMING"){
        console.log("BANTAAAAAAAAAAAAAAAAAAaaaa")
this.disp = true
      }

    });

    // this.getStatusForGraph();

this.graphdetails();


this.memServ.newmemebermes().subscribe(data =>{
  console.log("TTTTTTTT", data);
  if (data == "successss"){
    // this.mesdisp = "Thank You For Resgistering Our Gfunds  Kindly Wait For Admin Verification"
   $(this.PopRes1.nativeElement).modal('show')

  }
})

}
dates=[];
dates1=[];


public showGuide = true;

// getStatusForGraph(){
//   this.memServ.statusForMemGraph().subscribe(res =>{
//     console.log("resppppppppp  graooooooooopp", res);
//     if (res['msg'] == "graph"){
//     console.log("resppppppppp  graooooooooopp iffffffff", res);

//       this.showGuide = false;
//     }
//   })
// }

public options:any;
graphdetails(){
  this.memServ.graphdetails().subscribe(data=>{
    console.log("fffffffffffffffffffffffffffffff",data);
    
     var a=data['chit_data'].map(a => a.date);

     var b=data['chit_data'].map(a => a.value0);
     var c=data['real_data'].map(a => a.receiving_member_amount);
console.log("dddddddddd",c);  
  this.options = {
    
  type: 'line',
  data: {
    labels:a,
    datasets: [
      {
        label: '# of default',
        data: b,
        
          fill : false,
          lineTension : 0.3,
          borderColor :"#0a58a4",
          borderWidth:1
        },
        {
          label : "# of Prizemoney",
          data : c,
          fill : false,
          lineTension : 0.3,
          borderColor :"#0a58a4",
          borderWidth:1
      }
    ]

 
  },
  options: {
     title :{
          text:"Graph",
          display:true

         },
    scales: {
      yAxes: [{
        ticks: {
          reverse: false
        }
      }]
    }
  }
}
console.log("fffffffffffffffffffffffffffffff",this.options);

var ctx = document.getElementById('chartJSContainer');
new Charts(ctx, this.options);
}
)

}

success(){
   this.router.navigate(['/login']);
}
}
