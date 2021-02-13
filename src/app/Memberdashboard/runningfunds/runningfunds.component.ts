import { Component, OnInit,Inject,ElementRef,ViewChild } from '@angular/core';
import {MemberService} from '../../Services/Memberservice/member.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from "@angular/router";
import * as Charts from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import * as CanvasJS from '../../canvasjs.min';


// import ChartDataLabels from '../../../../node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js';
declare var $: any;



@Component({
  selector: 'app-runningfunds',
  templateUrl: './runningfunds.component.html',
  styleUrls: ['./runningfunds.component.css']
})
export class RunningfundsComponent implements OnInit {
  // @ViewChild('prizeResponse') priz     eResponse:ElementRef;

  constructor(private memservice: MemberService,public router:Router,public dialog: MatDialog) { }
  member_runningdata;
  member_runningcount;
  public itemsPerPage123;
  public p;
  ngOnInit() {
      this.running();
  }
running(){
  this.memservice.memberrunninglist().subscribe(data=>{
          console.log("running chits",data);
          this.member_runningdata = data['data']
          this.member_runningcount = data['fcount']
      });
}
  running_graphdata;
  bidauction;
  runninggraph;
  getrunningfund(data){
    console.log("poooooooooooo",data);
    localStorage.setItem('testObject',encodeURIComponent(JSON.stringify(data)));
    this.memservice.bidauction = data;
    this.memservice.depFDcopy = data.fdcopy;
    this.memservice.chitgovtcopy = data.govtcopy;
    this.memservice.runningdetails(data).subscribe(data =>{
      console.log("respoooooooooooo",data);
      this.running_graphdata = data;
      this.memservice.graphdata = this.running_graphdata;
      console.log("###################",this.memservice.graphdata)
      this.router.navigate(['/dashboard/runninggraph']);
    })
  }

  perPage=6;

  userpag(newobject:any){
  this.perPage = newobject;
  console.log("aaaadddfff",this.perPage)
}

};

@Component({
  selector:'app-runningfundsgraph',
  templateUrl : './runningfundsgraph.html',
  styleUrls: ['./runningfunds.component.css']
})
export class RunningfundsGraph implements OnInit{



  @ViewChild('depositfd') depositfd: ElementRef;
  @ViewChild('govtcopyimg') govtcopyimg: ElementRef;
  @ViewChild('raiseLoan') raiseLoan:ElementRef;
  @ViewChild('ReqPop') ReqPop:ElementRef;
 
  @ViewChild('bidpopup') bidpopup:ElementRef;
   


running_graphdata;
chart = [];
chart23 = [];

public timeaction;
public graphcomm=[];
public graphdivval=[];
public graphnextpay=[];
public endtime;
public santy;
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
public allow:boolean;

constructor(public router:Router,private memservice: MemberService, public dialog: MatDialog){}


ngOnInit() {


//   $(document).ready(function() { 
//     $("#scroll").scroll(function() { 
        
//     }); 
// }); 

// let val = document.getElementById("scroll")


this.checktime();
this.graph_chitnumber =this.memservice.bidauction.chit_number
console.log("@@@@@@@@@@@@@@@@@",this.graph_chitnumber)
this.grpdata = this.memservice.graphdata;
console.log("4444444444@@@@@@@@@!!!!!!!!!!!!!!!!!!",this.grpdata)

for(var i=0;i<this.grpdata['details'].length;i++)
{

  if(this.grpdata['details'][i]['member'] !== "GFUNDS"){
      this.showprizemoney.push(this.grpdata['details'][i])
  }


  console.log("8888888888888",i,this.grpdata['details'][i])
  this.graphobject.push({
    "prizeMoney":this.grpdata['details'][i]['prizemoney'],
    "bidamount":this.grpdata['details'][i]['bidamount'],
    "auctioncount":this.grpdata['details'][i]['auctioncount'],
    "date":this.grpdata['details'][i]['date'],
    "member":this.grpdata['details'][i]['member'],
    "forecommision":this.grpdata['details'][i]['Foremancomission'],
    "divvalue":this.grpdata['details'][i]['dividend_value'],
    "nextpay":this.grpdata['details'][i]['nextpayableamount']
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
   console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%5",this.myArray)

 
 var chart = new CanvasJS.Chart("chartContainer",

    {
      // zoomEnabled: true,
      // axisX:{
      //   viewportMinimum: -1,
      //   viewportMaximum: 4.5
      // },

      toolTip: {
        shared: true
     },
      
      data: [
      
      
      {     
      // indexLabelFontSize: 20,
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
      // indexLabelFontSize: 20,
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

    // chart.render();

    // document.getElementsByClassName("canvasjs-chart-canvas")[1].addEventListener("wheel", function(e){
    //   e.preventDefault();
      
     
        
    //   var axisX = chart.axisX[0];
    //   var viewportMin = axisX.get("viewportMinimum"),
    //       viewportMax = axisX.get("viewportMaximum"),
    //       interval = axisX.get("minimum");
    
    //   var newViewportMin, newViewportMax;
    
    //   if (e.eventPhase < 0) {
    //     newViewportMin = viewportMin + interval;
    //     newViewportMax = viewportMax - interval;
    //   }
    //   else if (e.eventPhase > 0) {
    //     newViewportMin = viewportMin - interval;
    //     newViewportMax = viewportMax + interval;
    //   }
    
    //   if(newViewportMin >= chart.axisX[0].get("minimum") && newViewportMax <= chart.axisX[0].get("maximum") && (newViewportMax - newViewportMin) > (2 * interval)){
    //     chart.axisX[0].set("viewportMinimum", newViewportMin, false);
    //     chart.axisX[0].set("viewportMaximum", newViewportMax);
    //   }
    // });



    var chart23 = new CanvasJS.Chart("chartContainer2",

    {

      toolTip: {
        shared: true
     },
      zoomEnabled: true,
      axisX:{
        // viewportMinimum: 0,
        viewportMaximum: 4.5
      },

      rangeChanged: function(e){
        if(e.trigger === "reset"){
          changeToPanMode();
        }
      },
      
      data: [
      
      
      {     
      // indexLabelFontSize: 20,
      indexLabelFontFamily:"Lucida Console" ,   
      type: "stackedColumn",
      // click: onClick,
      name: "PrizeMoney",
      showInLegend: true,
      color: "#000080",
      indexLabelFontColor: "white", 
      indexLabelOrientation: "vertical", 
      indexLabelPlacement: "inside",
        dataPoints:this.myArray,
    },
    {
      // indexLabelFontSize: 20,
      indexLabelFontFamily:"Lucida Console" ,        
      type: "stackedColumn",
      showInLegend: true,
      name: "Bid Amount",
      color: "#00ffff", 
      dataPoints: this.myArray1,
    }
      ]
    });

    chart23.render();
    changeToPanMode();



    function changeToPanMode(){
  var parentElement = document.getElementsByClassName("canvasjs-chart-toolbar");
  var childElement = document.getElementsByTagName("button");
  if(childElement[0].getAttribute("state") === "pan"){
    childElement[0].click();
  }
}












    

this.fdimg = this.memservice.depFDcopy;
console.log("1lakhhhhhhhhhhhhhhhhhhh",this.fdimg);

this.govt = this.memservice.chitgovtcopy;

 function onClick(evt) {
   console.log(evt,"ssss");
   document.getElementById("auctiondate").innerHTML = evt.dataPoint.label ;
   document.getElementById("Prizemoney").innerHTML = evt.dataPoint.y ;
   document.getElementById("Member").innerHTML = evt.dataPoint.indexLabel ;
      $('#finalchit').modal('show');
  
  };
}

checktime(){
  var retrievedObject = decodeURIComponent(localStorage.getItem('testObject'));
        retrievedObject=JSON.parse(retrievedObject);
   this.memservice.checkactiontime(retrievedObject).subscribe(data =>{
        console.log("namdaaaaaaaaaa",data);
        this.timeaction=new Date(data['date']);
        this.endtime=new Date(data['date']);
        console.log("namdaaaaaaaaaa",this.endtime);
        this.endtime.setTime(this.endtime.getTime() + (1*60*60*1000));
        console.log("ddddddddddd",this.timeaction,this.endtime,data['res']);
        if(data['res']){
      this.backendtimecompare();
}
else{
  this.allow=false;
}
    });

   }



 actionChat(){
   localStorage.setItem('endtime',encodeURIComponent(JSON.stringify(this.endtime)));
   // this.memservice.changeMessage(this.endtime)
   this.router.navigate(['/dashboard/auctionpage'])
 }
 gotopage(){
   this.router.navigate(['/dashboard/runningfunds']);
 }
 b;
 ngOnDestroy() {
     if (this.b) {

    clearInterval(this.b);
    clearInterval(this.b);
localStorage.removeItem('start');
}
}
 gorunningfund(){

      this.router.navigate(['/dashboard/runningfunds'])
 }

 public backendtimecompare(){
   // this.router.navigate(['/dashboard/runninggraph']);
   localStorage.setItem('start',"1");
   if( localStorage.getItem('start')=="1"){
   this.b= setInterval(() =>{
    var d=new Date()
   console.log("neeeeeeeewwwwwwwwwwww",d)
    var iga=d.valueOf();
    var hind=this.timeaction.valueOf();
    var mund=this.endtime.valueOf();
   if((hind<iga)&&(iga<mund)){
     this.allow = true;
        }
  //  else{
  //    localStorage.removeItem('allow');

  //  }
  }, 1000);}
 }
 fdcopy(){
   $(this.depositfd.nativeElement).modal('show');
 }

 viewgovtcopy(){
   $(this.govtcopyimg.nativeElement).modal('show');
 }


callmemberdetailspop(){
  $(this.raiseLoan.nativeElement).modal('show');

}
reqpp;
 callmemberdetails(data){
   console.log("myyyyyyyyyyyyyyydataaaaaaaaaaaaaaaaa",data);

   let cmp=this.finalprmoney;
   console.log("curerent",cmp);
   console.log("curerentdaatttaaaaaa",data.details.length);
   for (let i=0; i<data.details.length; i++ ) {
     if(cmp==data.details[i].prizemoney){
    let raiseFund = {'auction_count':data.details[i].auctioncount,
                      // 'member_id':data.details[i].member_id,
                      // 'membercount':data.details[i].membercount,
                      'chit':data.details[i].chit_number,
                      'loan_amount':data.details[i].prizemoney,
                      'loan_type':"Gold"}
    console.log('hiiiii',raiseFund);
    this.memservice.RaiseGoldLoan(raiseFund).subscribe(data =>{
      console.log("GOldddddddddCominGDDDDDDDDD",data);
      this.reqpp = data;
        $(this.ReqPop.nativeElement).modal('show');



        });
     }
   }

}

func(colr){
  let val = document.getElementById("scroll")
  val.scrollLeft
  
}




};



@Component({
  selector:'app-auction',
  templateUrl : './auction.html',
  styleUrls: ['./runningfunds.component.css']

})
export class ForemanAuction implements OnInit{
  // @ViewChild('prizeResponse') prizeResponse:ElementRef;
  @ViewChild('bidpopup') bidpopup:ElementRef;


constructor(public router:Router,private memservice: MemberService,public dialog:MatDialog){
  this.countTimeaction();
}
 ngOnInit() {
   var retrievedObject = decodeURIComponent(localStorage.getItem('testObject'));
        retrievedObject=JSON.parse(retrievedObject);
   this.backobject=retrievedObject;
   this.refreshdata();
   this.abc();

 }
 backobject;
  auctionbid;
 public days;
 public chit_name;
 public amount;
 public hours;
 public minutes;
 public seconds;
  public auction:any = {};
public auctiontimeee;
public vari:boolean=false;
public countDownDate:any;
public c;
public abc(){
     this.countDownDate =new Date(JSON.parse(decodeURIComponent(localStorage.getItem('endtime'))));
      console.log("testing shared value",typeof(this.countDownDate)); };
public countTimeaction(){
 console.log("timer functionnnnnnnnn");
    { this.c = setInterval(()=>{

    var now = new Date().getTime();
  var distance = this.countDownDate - now;
  // this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  this.hours =   minutes + ":" + seconds ;
    if (distance < 0) {

    clearInterval(this.c);
    localStorage.removeItem('timer');
   this.hours = "Action completed";
this.auctionfinal();
  }
}, 1000);
   }
}
backtorunn(){
  this.router.navigate(['/dashboard/runninggraph']);
}
public bidstatus;
auctionSend(a){

 this.backobject['bid']=a;
  this.memservice.auctionamount(this.backobject).subscribe(data=>{
    console.log(data)
    this.bidstatus = data;
    $(this.bidpopup.nativeElement).modal('show');
    // alert(data)
    this.refreshdata();
  })
}
auctionlist;
refreshdata(){
  this.memservice.getauctionlist(this.backobject).subscribe(data=>{
    this.auctionlist=data;
  })
}


AuctionDetails
auctionfinal(){
  this.memservice.finalaction(this.backobject).subscribe(data=>{
    console.log("finalllllllll@@@@@@@@@",data);
    this.AuctionDetails = data;
    this.memservice.AuctionPOpUp = this.AuctionDetails;
    console.log("Auctionnn Doneeeeeeeeee",this.AuctionDetails);
    const dialogRef = this.dialog.open(AuctDialog, {
       width: '50%',

    });


  });


}
 ngOnDestroy() {
  if (this.c) {

    clearInterval(this.c);
    clearInterval(this.c);
    localStorage.removeItem('timer');
}
}
}

@Component({
  selector: 'FinalAuction',
  templateUrl: 'FinalAuctionPopUp.html',
})

export class AuctDialog
 {

  constructor(
    public dialogRef: MatDialogRef<AuctDialog>,private memservice: MemberService,public router:Router) {}
public finalPop;

 ngOnInit() {
this.finalPop = this.memservice.AuctionPOpUp
console.log("finalllllpoppppppupppsww",this.finalPop);
}

onNoClick(): void {
  this.router.navigate(['/dashboard/runninggraph'])

    this.dialogRef.close();
  }



}
