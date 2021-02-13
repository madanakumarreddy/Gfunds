import { Component, OnInit } from '@angular/core';
import {MemberService} from '../../Services/Memberservice/member.service';
import { ForemanfileService } from '../../Services/foremanupload/foremanfile.service'
import {Router} from "@angular/router";
import * as Charts from 'chart.js';
import * as CanvasJS from '../../canvasjs.min';


@Component({
  selector: 'app-closedfunds',
  templateUrl: './closedfunds.component.html',
  styleUrls: ['./closedfunds.component.css']
})
export class ClosedfundsComponent implements OnInit {

  constructor(private memservice: MemberService,public foremanserv:ForemanfileService,public router:Router) { }

  ngOnInit() {
      this.closedchit();
  }
  public closed;
closedchit(){
  this.memservice.closedchits().subscribe(data=>{
    console.log("sSSSssssssssssssss",data)
    this.closed=data['data']
    console.log("finSSSSSSSSSSSSSAAAAAAAAAAAAAAAA",this.closed);
})

}


running_graphdata;
getClosedChits(data){
  console.log("Closeddddddddddddddd",data);
  let finaldata = {"chit_id":data.id}
  localStorage.setItem('testObject',encodeURIComponent(JSON.stringify(data)));
     this.memservice.bidauction = data;
    this.memservice.closedgraphdetails(finaldata).subscribe(data =>{
      console.log("respoooooooooooo!!!!!!!!!!",data);
      this.running_graphdata = data;
      localStorage.setItem('graphdata',encodeURIComponent(JSON.stringify(data)));
      this.memservice.graphdata  = this.running_graphdata
      this.router.navigate(['/dashboard/closedfundsgraph']);
    })
}



}




@Component({
  selector: 'app-closedFundsgraph',
  templateUrl: './closedFundsGraph.html',
  styleUrls: ['./closedfunds.component.css']
})
export class ClosedGraphComponent implements OnInit {
  public running_data;
  running_graphdata;
barchart = [];
public timeaction;
public graphcomm=[];
public graphdivval=[];
public graphnextpay=[];
public endtime;
public grpdata;
public graphobject = [];
public graphdates = []
public graphdates1 = []
public graphprize = []
public graphprize1=[]
public graphbid = []
public graphname = []
public graphname1 = []
public details= [];
public showprizemoney = [];
graph_chitnumber;
public fdimg;
public govt;
public finalprmoney;
public nextpay;
public myArray = [];
public myArray1 = [];
  constructor(public foremanserv:ForemanfileService, public memservice:MemberService,public router:Router) { }
public allow:boolean=JSON.parse(localStorage.getItem('allow'));
  ngOnInit() {
 // this.checktime();
this.graph_chitnumber =this.memservice.bidauction.chit_number
console.log("@@@@@@@@@@@@@@@@@",this.graph_chitnumber)
this.grpdata = this.memservice.graphdata;
console.log("4444444444@@@@@@@@@!!!!!!!!!!!!!!!!!!",this.grpdata)

for(var i=0;i<this.grpdata.length;i++)
{

  if(this.grpdata[i]['member'] !== "GFUNDS"){
      this.showprizemoney.push(this.grpdata[i])
  }


  console.log("8888888888888",i,this.grpdata[i])
  this.graphobject.push({
    "prizeMoney":this.grpdata[i]['receiving_member_amount'],
    "bidamount":this.grpdata[i]['bid_amount'],
    "auctioncount":this.grpdata[i]['auction_count'],
    "date":this.grpdata[i]['auctiondate'].substring(0, 10),
    "member":this.grpdata[i]['member_name'],
    "forecommision":this.grpdata[i]['foreman_platform_comission'],
    "divvalue":this.grpdata[i]['dividend_value'],
    "nextpay":this.grpdata[i]['nextpayableamount']
  });


   }

 console.log("))))(((((((((",this.showprizemoney)
if(this.showprizemoney.slice(-1)[0] !== undefined){
  this.finalprmoney = this.showprizemoney.slice(-1)[0]['prizemoney']
  this.nextpay = this.showprizemoney.slice(-1)[0]['nextpayableamount']
  console.log("00000000000000000",this.finalprmoney)
}

  
  this.graphobject.forEach(obj =>{
    let a = { label : obj['date'], y : parseInt(obj['prizeMoney']),  indexLabel : obj['member']}
    this.myArray.push(a)
    console.log('gggggggggggggggggggg',this.myArray);
  })

  this.graphobject.forEach(obj =>{
    let b = { label : obj['date'], y : parseInt(obj['bidamount'])}
    this.myArray1.push(b)
  })

   for(var i=0;i<this.graphobject.length;i++){
     console.log("%%%%%%%%%%%%%%%%%",i,this.graphobject[i]['prizeMoney'])
     this.graphdates.push(this.graphobject[i]['date'])
     this.graphprize.push(parseInt(this.graphobject[i]['prizeMoney']))
     this.graphbid.push(parseInt(this.graphobject[i]['bidamount']))
     this.graphname.push(this.graphobject[i]['member'])

      this.graphcomm.push(this.graphobject[i]['forecommision'])
     this.graphdivval.push(this.graphobject[i]['divvalue'])
     this.graphnextpay.push(this.graphobject[i]['nextpay'])
   }
   console.log("graphhhhhhhhhhhhhhhhhhhhhh",this.graphobject)
   console.log("e||||||||||||||||||||||",this.graphprize)

 
 var chart = new CanvasJS.Chart("chartContainer",

    {
      toolTip: {
         shared: true
      },
      data: [
      
      {     
      indexLabelFontSize: 25,
      indexLabelFontFamily:"Lucida Console" ,   
      type: "stackedColumn",
      click: onClick,
      name: "PrizeMoney",
      showInLegend: true,
      color: "#000080",
      indexLabelFontColor: "white", 
      indexLabelOrientation: "vertical", 
      indexLabelPlacement: "inside",
        dataPoints:this.myArray,
    },
    {
      indexLabelFontSize: 25,
      indexLabelFontFamily:"Lucida Console" ,        
      type: "stackedColumn",
      showInLegend: true,
      name: "Bid Amount",
      color: "#00ffff", 
      dataPoints: this.myArray1,
    }
      ]
    });

    chart.render();

this.fdimg = this.memservice.depFDcopy;
console.log("1lakhhhhhhhhhhhhhhhhhhh",this.fdimg);

this.govt = this.memservice.chitgovtcopy;

function onClick(e){
  alert(  e.dataSeries.type + ", dataPoint { Auctiondate:" + e.dataPoint.label + ", Prizemoney: "+ e.dataPoint.y +", Member:"+e.dataPoint.indexLabel+" }" );
  // $(this.finalchit.nativeElement).modal('show');
}


  }



//   graphvalue(){
// this.grphdata = JSON.parse(decodeURIComponent(localStorage.getItem('graphdata')));

//   }
 
// public b;
// checktime(){
//   var retrievedObject = decodeURIComponent(localStorage.getItem('testObject'));
//         retrievedObject=JSON.parse(retrievedObject);
//    this.memservice.checkactiontime(retrievedObject).subscribe(data =>{
//         console.log("namdaaaaaaaaaa",data);
//         this.timeaction=new Date(data['date']);
//         this.endtime=new Date(data['date']);
//         this.endtime.setTime(this.endtime.getTime() + (1*60*60*1000));
//         console.log("ddddddddddd",this.timeaction,data['res']);
//         if(data['res']){
//       this.backendtimecompare();
// }
// else{
//   this.allow=null;
// }
//     });

//    }
//    public backendtimecompare(){
//    localStorage.setItem('start',"1");
//    if( localStorage.getItem('start')=="1"){
//    this.b= setInterval(() =>{
//     var d=new Date()
//     var iga=d.valueOf();
//     var hind=this.timeaction.valueOf();
//     var mund=this.endtime.valueOf();
//    if((hind<iga)&&(iga<mund)){
//       localStorage.setItem('allow',"1");
//         }
//    else{
//      localStorage.removeItem('allow');

//    }
//   }, 1000);}
//  }

 action1Chat(){
   localStorage.setItem('endtime',encodeURIComponent(JSON.stringify(this.endtime)));
   this.router.navigate(['/foreman/foremanauction']);
 }


 backToFunds(){
  this.router.navigate(['/dashboard/closedfunds'])
}

}

