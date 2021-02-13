import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {ForemanfileService} from '../../Services/foremanupload/foremanfile.service';
// import { MemberService } from '../../Services/Memberservice/member.service';
import {Router} from "@angular/router";
declare var $;

@Component({
  selector: 'app-foremanhome',
  templateUrl: './foremanhome.component.html',
  styleUrls: ['./foremanhome.component.css']
})
export class ForemanhomeComponent implements OnInit {

  constructor(public reg:ForemanfileService,
              private router: Router,) { }

public runningData;
profPPic;
  ngOnInit() {
      this.reg.runningchits1().subscribe(data=>{
        console.log("mmmmmmmmmmm",data)
      var arr = Object.values(data);
      if (arr[0]=="N"){
      }
      else{this.runningData=arr;
      console.log("sitaro phool barasavo ",arr)
    }});



      this.reg.Profilepic().subscribe(data =>{
      console.log("profileeeeeepicccccccccc",data);
      this.profPPic = data
      console.log("FinalllllllllPICCCCCCC",this.profPPic);
      this.reg.MyProfile = this.profPPic;
    });

    this.reg.updateForemanScore().subscribe(data =>{
      console.log("ressssssssspppp",data);
    })

  }

public transdata:any={}
public transdata1:any={}
public newid:string;

  public auctiontransdata;
  transactionids(data){
    console.log("******************",data);
    let chit = {"chit_id":data}
    localStorage.setItem('chitidinhome',encodeURIComponent(JSON.stringify(chit)));
    this.router.navigate(['./foreman/auctiondetails'])

  }
public memdetails;
  getMemberDetails(data){
    console.log("chittttttttttttiddddddddddd",data);
    let finaldata = {"chit_id":data}
    this.reg.MemDetails(finaldata).subscribe(result => {
      console.log("backdataaaaaaaaaaaa",result);
      this.memdetails = result;
      this.reg.viewdetails = this.memdetails
      console.log("Allalllll memmmmmmmmmdetailsssss",this.memdetails);
      this.router.navigate(['./foreman/memberdetails'])
    })

  }

}

@Component({
  selector :'app-auctiondetails',
  templateUrl : './auctiondetails.html',
  styleUrls: ['./foremanhome.component.css']

})
export class AuctionDetails implements OnInit{
  public auctiondata;
  ngOnInit(){
    var chit = JSON.parse(decodeURIComponent(localStorage.getItem('chitidinhome')));
    console.log("rrrrrrrrr",chit);
     this.regserv.memberauctiontrans(chit).subscribe(data =>{
      console.log("sssssssss",data);
      this.auctiondata = data;
    });

  }

  constructor(public regserv:ForemanfileService,public router:Router){}
  public getmembertransdata;
  public adt;
  getmembertrans(data,obj){
    console.log("222222222222",data,obj);
    var transdata = {"auction":data,"fund_id":obj}
    this.regserv.adt=transdata;
    localStorage.setItem('transdata',encodeURIComponent(JSON.stringify(transdata)));
    this.router.navigate(['./foreman/transauction'])

  }

}



@Component({
  selector : 'app-transdetail',
  templateUrl :'./auctiontransactionsdetail.html',
   styleUrls: ['./foremanhome.component.css']
})
export class  AuctiontransactionsDetails implements OnInit{
  @ViewChild('updateauction') updateauctiontime:ElementRef;
  @ViewChild('verif1ytrans') verifytrans:ElementRef;
@ViewChild('verif1ytrans1') verifytrans1:ElementRef;
@ViewChild('rtm') rtmm:ElementRef;
  public showmembertrans;
  public date;
  public time;
  public newid:any;
  ngOnInit(){
    var chit = JSON.parse(decodeURIComponent(localStorage.getItem('transdata')));
    console.log("rrrrrrrrr",chit);
    this.foreserv.retrievetransactions(chit).subscribe(data => {
     this.showmembertrans= data;
     console.log("responnnnnnnnnn",data);
    })

  }

  constructor(public foreserv:ForemanfileService,public router:Router){}

  backToAuction(){
   this.router.navigate(['./foreman/auctiondetails'])
  }
  updateAuctiondate(){
    $(this.updateauctiontime.nativeElement).modal('show');
  }

  rtmloan(data){
    $(this.rtmm.nativeElement).modal('show');
    console.log("trandetails",data);
    this.foreserv.rtmpreloan(data).subscribe(data =>{

    })
  }


  public transdata={};
  enter1transaction(data){
  this.transdata=data;
  console.log("ssssssss",this.transdata)
    $(this.verifytrans1.nativeElement).modal('show');
}


auctionset(date,time){
  console.log("checking auction popup",date,time);
  localStorage.setItem('fund_id',this.foreserv.adt.fund_id);
  let obj = {"date": date+' '+time,'id':this.foreserv.adt.fund_id};
  this.foreserv.aucdate(obj).subscribe(data=>{
  })
}


s1avetran1s(a){
this.transdata['status']="newid";
this.transdata['id1']="";
console.log("aaaaaaaaaa",this.transdata);
  this.foreserv.approvedeptans(this.transdata).subscribe(data=>{
    // alert(data.res);
  })
}
veryfy1transaction(data){
  this.transdata=data;
    $(this.verifytrans.nativeElement).modal('show');
}
approvetrans(a){
  console.log("bbbbbbbbbbbbbbbbbbbb",a);
this.transdata['status']=a;
console.log("aaaaaaaaaa",this.transdata);
  this.foreserv.approvedeptans(this.transdata).subscribe(data=>{
    this.ngOnInit();
  })
}
}



@Component({
  selector : 'mem-details',
  templateUrl :'./viewmemberdetails.html',
   styleUrls: ['./foremanhome.component.css']
})

export class MemberDetails implements OnInit{

  @ViewChild('viewAllDetails') viewAllDetails:ElementRef;
@ViewChild('verifytrans1') verifytrans1:ElementRef;
  constructor(public reg:ForemanfileService, public router:Router){}

public MemberData;
ngOnInit(){
  this.MemberData = this.reg.viewdetails
  console.log("ALLLLLLLLLLLLLLLLLLLLLLLL",this.MemberData);
}


auctionback1(){
  this.router.navigate(['/foreman/foremanhome'])
}

public viewDetails:any = {};
viewmemberprofile(data){
  let id = {"data":data}
  console.log("Memmmmmmdetailssssssssssssss",data);
  this.reg.viewProf(id).subscribe( result => {
    console.log("BackDATAAAAAAAAAAAA",result);
    this.viewDetails = result;
    console.log("&&&&&&&&&&&&&&&&&&&",this.viewDetails)
    $(this.viewAllDetails.nativeElement).modal('show');


  });
}

public transdata:any={}
public transdata1:any={}
public newid:any;
  entertransaction1(data){
    console.log(data,"datadatadatadatadatadatadata")
  this.transdata=data;
  console.log('######',this.transdata)
    $(this.verifytrans1.nativeElement).modal('show');
}

savetrans1(data){
  console.log("bbbbbbbbbbbbbbbbbbbb",data);
  let finalTranData = {
    "transaction" : data,
    "memberID" : this.transdata.memberId,
    "Chit_ID" : this.transdata.chitId,
    "auctionId" : this.transdata.auctionNo
  }
  this.reg.saveTran(finalTranData).subscribe(data=>{
   console.log("data came",data)
   this.router.navigate(['/foreman/foremanhome'])
  })
}

}







