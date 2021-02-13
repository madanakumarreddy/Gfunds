import { Component, OnInit,Inject,ElementRef,ViewChild } from '@angular/core';
import { AdminService } from '../../Services/Adminservice/admin/admin.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MemberService} from '../../Services/Memberservice/member.service';
import { ForemanfileService } from '../../Services/foremanupload/foremanfile.service';
import {Router} from "@angular/router";
import * as Charts from 'chart.js';
import * as CanvasJS from '../../canvasjs.min';
import { RegistrationService } from 'src/app/Services/registrationservice/registration.service';
declare var $: any;


@Component({
  selector: 'app-manageforeman',
  templateUrl: './manageforeman.component.html',
  styleUrls: ['./manageforeman.component.css']
})
export class ManageforemanComponent implements OnInit {
  @ViewChild('fundResponse') fundResponse:ElementRef;
  size: any;

  constructor(public manageadmin:AdminService,public dialog: MatDialog,
              public memservice:MemberService,public foremanserv:ForemanfileService,
              public router:Router) { }

  public searchText = '';
  public manageforeman;
  public itemsPage = 5;


  ngOnInit() {
  	this.manageadmin.manageForemanDetail().subscribe(data =>{
      console.log("backendeeeee data ",data);

      console.log("backendeeeee count data ",data['data'].length)
  		 this.manageforeman= data['data'];
  	});


  }

  
    


   private running_graphdata;
  progress12(data){
    console.log("poooooooooo",data)
 localStorage.setItem('testObject',encodeURIComponent(JSON.stringify(data)));
     this.memservice.bidauction = data;
    this.foremanserv.runningforemandetails(data).subscribe(data =>{
      console.log("respoooooooooooo",data);
      this.running_graphdata = data;
      localStorage.setItem('graphdata',encodeURIComponent(JSON.stringify(data)));
      this.memservice.graphdata  = this.running_graphdata
      this.router.navigate(['/Adminhomepage/Admingraphdetails']);
    })

  }

  usage(data){
    this.itemsPage = data;
  }

public showrunning;
public showrun = false;
getfunds(data){
  this.manageadmin.getrundata(data).subscribe(data =>{
    console.log("ressssssss",data)
    this.showrun=true;
    this.showrunning = data;
console.log("ressssssss deeeeeeeeeees",!this.showrunning[0])
  })
}



public foremandata;
  editforemandetails(data){
       this.manageadmin.foremandata = data;
       console.log("backend data ",data)
    const dialogRef = this.dialog.open(viewForeman,{
        disableClose : true,
      width:"500px",
      // height : "scroll",
    });

  dialogRef.afterClosed().subscribe(result =>{
    console.log("seeeee data",result)
     let data = {"data":result,"status":''}
    this.manageadmin.updatemanageforeman(data).subscribe(backdata =>{});

  });

}


delmanageforeman(data,status){
   let data1 = {"id":data,"status":status}
  this.manageadmin.deleteforeman(data1).subscribe(data =>{
    console.log("backenddd data ",data)
  });
}

getdataa()
{
   
      
      this.manageadmin.manageForemanDetail().subscribe(data =>{
        console.log("backendeeeee data ",data);
  
        console.log("backendeeeee count data ",data['data'].length)
         this.manageforeman= data['data'];
     
});
}
 

public appFor;
public success;
approveForeamn(data,status){
  let data11  = {"id":data,"status":status}
  this.manageadmin.adminapproveforeman(data11).subscribe(data =>{
    this.appFor = data['PERMISION'];
    this.success = status
    console.log(" beforre >>>>>>>> ",this.success)
    if(this.success=="DECLINE")
    {
      this.success="Request Decline"
      console.log(">>>>>>>> ",this.success)
    }
    else{
      this.success="Request Approved"
      console.log(">>>>> "  ,this.success)
    }
    
    console.log("............jsdsd",this.success)
    this.getdataa();
    $(this.fundResponse.nativeElement).modal('show');

    
    console.log("sssssssssss",this.appFor)
  });
}



}



@Component({
  selector: 'app-adminrunningraph',
  templateUrl: './admingraph.html',
  styleUrls: ['./manageforeman.component.css']
})
export class AdmingraphComponent implements OnInit {
   @ViewChild('finalchit') finalchit:ElementRef;

  public running_data;
  running_graphdata;
  public onChartClick;
chart = [];
public timeaction;
public endtime;
public grphdata;
public graphobject = [];
public graphdates = []
public graphprize = []
public graphbid = []
public graphname:any = []
// public details= [];
public showprizemoney = [];
graph_chitnumber;
public graphcomm = [];
public graphdivval = [];
public graphnextpay = [];
public fdimg;
public govt;
public finalprmoney;
public nextpay;
public myArray = [];
public myArray1 = [];
  constructor(public foremanserv:ForemanfileService, public memservice:MemberService,public router:Router) { }
public allow:boolean=JSON.parse(localStorage.getItem('allow'));
  ngOnInit() {

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
    "member":this.grphdata[i]['member'],
      "forecommision":this.grphdata[i]['Foremancomission'],
    "divvalue":this.grphdata[i]['dividend_value'],
    "nextpay":this.grphdata[i]['nextpayableamount']
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
   this.router.navigate(['/Adminhomepage/Adminmanageforeman']);
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
     localStorage.removeItem('allow');

   }
  }, 1000);}
 }

 action1Chat(){
   localStorage.setItem('endtime',encodeURIComponent(JSON.stringify(this.endtime)));
   this.router.navigate(['/foreman/foremanauction']);
 }


gotopage123(){
  this.router.navigate(['/Adminhomepage/Adminmanageforeman'])
}




}



@Component({
  selector: 'manageViewForeman',
  templateUrl: 'viewforemandetails.html',
})

export class viewForeman {
  public bankname = ["SBI", "Canara Bank", "Allahabad Bank", "Andhra Bank", "BOI",
        "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank", "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank",
        "Indian Bank", "Indian Overseas Bank", "Oriental Bank of Commerce", "Punjab & Sindh Bank", "Punjab National Bank", "Syndicate Bank", "UCO Bank", "Union Bank of India", "Vijaya Bank",
        "IDBI Bank", "Bharatiya Mahila Bank", "Axis Bank", "Deutsche Bank", "Dhanlaxmi Bank", "Federal Bank", "ICICI Bank", "Karnataka Bank Ltd", "ING Vysya Bank", "Kotak Bank", "Yes Bank Ltd", "Shamrao Vitthal Co-operative Bank",
        'City Union Bank','Development Credit Bank','Induslnd Bank','Jammu And Kashmir Bank','Karur Vasya Bank','Lakshmi Vilas Bank','South India Bank','United Bank Of India','Standard Chartered Bank', "Others"
    ];
    public accounttype = ["Savings","Current", "Fixed"
    ];
    // public edit:boolean=true;
  constructor(public dialogRef: MatDialogRef<viewForeman>,public manageadmin:AdminService,private regServ:RegistrationService) {}
  // editdata(data){
  //   this.edit=false;

  // }
 enableEdit: boolean = false;
 public edit:boolean=true;
 
  public ForemanManage:any = {};
  public state;
  public countryList:any;
  editflagg:boolean=true;
  ngOnInit(){
    this.countryList = this.regServ.countryList1
    console.log("@@@@@@@@@@@@",this.countryList)
    this.ForemanManage =this.manageadmin.foremandata;
  }
  editdata(data){
  this.edit=false;

}

  call(data)
   {
    
this.edit=false;
    //  this.editflagg=false;
    //  if(this.editflag===true)
    //  {
    //   this.editflag=false;
    //  }
    //  else
    //  {
    //   this.editflag=true;
    //  }
     
    
   }
 cities: Array<any>;
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  }
close():void{
  this.dialogRef.close();
}

}

