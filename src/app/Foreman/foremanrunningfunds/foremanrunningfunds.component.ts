import { Component, OnInit,Inject,ElementRef,ViewChild } from '@angular/core';
import { ForemanfileService } from '../../Services/foremanupload/foremanfile.service';
import {MemberService} from '../../Services/Memberservice/member.service';
import {Router} from "@angular/router";
import * as Charts from 'chart.js';
declare var $: any;
import * as CanvasJS from '../../canvasjs.min';


@Component({
  selector: 'app-foremanrunningfunds',
  templateUrl: './foremanrunningfunds.component.html',
  styleUrls: ['./foremanrunningfunds.component.css']
})
export class ForemanrunningfundsComponent implements OnInit {
  public running_data;
  
  constructor(public foremanserv:ForemanfileService,public memservice:MemberService,public router:Router) { }

  ngOnInit() {
  	this.foremanserv.runfund().subscribe(data =>{
  		console.log("ressssssss",data);
  		this.running_data = data;
    })
    
  }

  
  private running_graphdata;
  progress(data){
    console.log("poooooooooo",data)
 localStorage.setItem('testObject',encodeURIComponent(JSON.stringify(data)));
     this.memservice.bidauction = data;
    this.foremanserv.runningforemandetails(data).subscribe(data =>{
      console.log("respoooooooooooo",data);
      this.running_graphdata = data;
      localStorage.setItem('graphdata',encodeURIComponent(JSON.stringify(data)));
      this.memservice.graphdata  = this.running_graphdata
      this.router.navigate(['/foreman/foremanrunningraph']);
    })

  }

}
@Component({
  selector: 'app-foremanrunninggraph',
  templateUrl: './foremangraph.html',
  styleUrls: ['./foremanrunningfunds.component.css']
})
export class ForemangraphComponent implements OnInit {
  @ViewChild('govtcopy1') govtcopy1:ElementRef;
  @ViewChild('fdcopy') fdcopy:ElementRef;
  public running_data;
  running_graphdata;
barchart = [];
public timeaction;
public endtime;
public grphdata;
public graphobject = [];
public graphdates = []
public graphprize = []
public graphbid = []
// public details= [];
public showprizemoney = [];
graph_chitnumber;
public fdimg;
public govt;
public finalprmoney;
public nextpay;
public myArray = [];
public myArray1 = [];
public actionChat;
  constructor(public foremanserv:ForemanfileService, public memservice:MemberService,public router:Router) { }
public allow:boolean=JSON.parse(localStorage.getItem('allow'));
  ngOnInit() {
this.getcopydetails(); 
this.graphvalue()
this.checktime();
this.graph_chitnumber =this.memservice.bidauction.chit_number
console.log("@@@@@@@@@@@@@@@@@",this.graph_chitnumber)
this.grphdata = this.memservice.graphdata;
console.log("4444444444",this.grphdata)

for(var i=0;i<this.grphdata.length;i++)
{

  if(this.grphdata[i]['member'] !== "GFUNDS"){
      this.showprizemoney.push(this.grphdata[i])
  }

  console.log("8888888888888",i,this.grphdata[i])
  this.graphobject.push({
    "prizeMoney":this.grphdata[i]['prizemoney'],
    "bidamount":this.grphdata[i]['bidamount'],
    "auctioncount":this.grphdata[i]['auctioncount'],
    "date":this.grphdata[i]['date'],
    "member":this.grphdata[i]['member']
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
  })

  this.graphobject.forEach(obj =>{
    let b = { label : obj['date'], y : parseInt(obj['bidamount'])}
    this.myArray1.push(b)
  })


   for(var i=0;i<this.graphobject.length;i++){
     console.log("%%%%%%%%%%%%%%%%%",i,this.graphobject[i]['prizeMoney'])
     this.graphdates.push(this.graphobject[i]['date'])
     this.graphprize.push(this.graphobject[i]['prizeMoney'])
     this.graphbid.push(this.graphobject[i]['bidamount'])
   }
   console.log("graphhhhhhhhhhhhhhhhhhhhhh",this.graphobject)
   console.log("e||||||||||||||||||||||",this.graphprize)
   console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%5",this.myArray)

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





    var chart = new CanvasJS.Chart("chartContainer1",

    {
      toolTip: {
         shared: true
      },

    
      zoomEnabled: true,
      axisX:{
        // viewportMinimum: 0,
        viewportMaximum: 4.5
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

// this.fdimg = this.memservice.depFDcopy;
// console.log("1lakhhhhhhhhhhhhhhhhhhh",this.fdimg);

// this.govt = this.memservice.chitgovtcopy;

function onClick(e){
  // alert(  e.dataSeries.type + ", dataPoint { Auctiondate:" + e.dataPoint.label + ", Prizemoney: "+ e.dataPoint.y +", Member:"+e.dataPoint.indexLabel+" }" );
  // $(this.finalchit.nativeElement).modal('show');
}

  }

public name;
public agrement:File;
public agrement1:File;
public uploaded=false;
  govtfd(event){
    this.agrement = event.target.files[0];
    console.log("tttttyyyyyy",this.agrement['name']);
  }
   govtfd1(event){
    this.agrement1 = event.target.files[0];
    console.log("tttttyyyyyy",this.agrement['name']);
  }

  graphvalue(){
    this.grphdata = JSON.parse(decodeURIComponent(localStorage.getItem('graphdata')));

  }
  gotopage(){
   this.router.navigate(['/foreman/foremanrunningfund']);
 }

b;
checktime(){
  var retrievedObject = decodeURIComponent(localStorage.getItem('testObject'));
        retrievedObject=JSON.parse(retrievedObject);
        this.memservice.checkactiontime(retrievedObject).subscribe(data =>{
        console.log("namdaaaaaaaaaa",data);
        this.timeaction=new Date(data['date']);
        this.endtime=new Date(data['date']);
        this.endtime.setTime(this.endtime.getTime() + (5*60*1000));
        console.log("ddddddddddd",this.timeaction,data['res']);
        if(data['res']){
      this.backendtimecompare();
}
else{
  this.allow=null;
  // alert("still pending transactions are there")
}
    });

   }
   public backendtimecompare(){
   localStorage.setItem('start',"1");
   if( localStorage.getItem('start')=="1"){
   this.b= setInterval(() =>{
    var d=new Date()
    var iga=d.valueOf();
    var hind=this.timeaction.valueOf();
    var mund=this.endtime.valueOf();
   if((hind<iga)&&(iga<mund)){
      localStorage.setItem('allow',"1");
        }
   else{
     // console.log("in elseeeeeeeeeeeeee")
     localStorage.removeItem('allow');

   }
  }, 1000);}
 }

 action1Chat(){
   localStorage.setItem('endtime',encodeURIComponent(JSON.stringify(this.endtime)));
   this.router.navigate(['/foreman/foremanauction']);
 }

public foremancopy : File;


fixedcopy(){
  let fd = new FormData();
  fd.append("copy",this.agrement);
  let chitid = this.memservice.bidauction['id'];
  console.log("WWWWWWW",chitid)
  fd.append("chit",chitid)
  console.log("999999999999999",fd)
  this.foremanserv.uploadfdcopy(fd).subscribe(data =>{
    console.log("kkkkkkkk",data);
      $(this.fdcopy.nativeElement).modal('show');
    // localStorage.setItem('dataSource',JSON.stringify(data));
    // this.fiximg1=localStorage.getItem('dataSource');
    // this.fiximg1 = false;
    // if(this.fiximg1=="successfully uploded"){
    //     this.fixedimagedata=!(this.fiximg1);
    //     this.fixedimagedata=true;

    // }
  });
  this.getcopydetails();
  this.graphvalue();
  this.checktime();
}

govtcopy(){
  let fd  = new FormData();
  fd.append("govt", this.agrement1);
  let chitid = this.memservice.bidauction['id'];
  fd.append("chit", chitid);
  console.log("ZZZZZZZZZZZ",fd);
  this.foremanserv.uploadfdcopy(fd).subscribe(data =>{
    console.log("qqqqqqqq",data);
     this.getcopydetails();
    $(this.govtcopy1.nativeElement).modal('show');
    // this.uploaded1=true;
     // this.agrement1=true;

  })

}
public copydetails;
public copydetails1;
getcopydetails(){
  this.foremanserv.getfdpic().subscribe(data =>{
    this.copydetails = data[1].fixeddepositcopy;
    this.copydetails1 = data[1].govtissuedcopy;
        console.log("uuuuuuuuuuuuuuuuuu",this.copydetails, this.copydetails1);
      });
}
}











@Component({
  selector: 'app-foremanauction',
  templateUrl: './foremanactionpage.html',
  styleUrls: ['./foremanrunningfunds.component.css']
})
export class ForemanauctionpageComponent implements OnInit {
  constructor(public router:Router,private memservice: MemberService){
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
 public hours;
 public minutes;
 public seconds;
  public auction:any = {};
public auctiontimeee;
public vari:boolean=false;
public countDownDate:any;
public c;
public chit_name;
public amount;
public abc(){
     this.countDownDate =new Date(JSON.parse(decodeURIComponent(localStorage.getItem('endtime'))));
      console.log("testing shared value",typeof(this.countDownDate)); };
public countTimeaction(){
 console.log("timer functionnnnnnnnn");
    { this.c = setInterval(()=>{

    var now = new Date().getTime();
  var distance = this.countDownDate - now;
 console.log(distance);
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
  this.router.navigate(['/foreman/foremanrunningraph']);
}
auctionSend(a){

        this.backobject['bid']=a;
  this.memservice.auctionamount(this.backobject).subscribe(data=>{
    alert(data);
    this.refreshdata();
  })
}
auctionlist;
refreshdata(){
  this.memservice.getauctionlist(this.backobject).subscribe(data=>{
    this.auctionlist=data;
  })
}
auctionfinal(){
  this.memservice.finalaction(this.backobject).subscribe(data=>{
    console.log(data);
    alert(data);

  })
}
 ngOnDestroy() {
    clearInterval(this.c);
    clearInterval(this.c);
    localStorage.removeItem('timer');
}
}
