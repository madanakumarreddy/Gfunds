import { Component, OnInit,Inject,ElementRef,ViewChild} from '@angular/core';
import { RegistrationService } from '../../Services/registrationservice/registration.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import {MemberService} from '../../Services/Memberservice/member.service';
declare var $;


@Component({
  selector: 'app-upcomingfunds',
  templateUrl: './upcomingfunds.component.html',
  styleUrls: ['./upcomingfunds.component.css']
})
export class UpcomingfundsComponent implements OnInit {
  @ViewChild('sendrequestresp') sendrequestresp:ElementRef;

public p: number = 1;
  constructor(public reg:RegistrationService,public dialog:MatDialog,public member:MemberService) { }
public chit:any;
public company_name;

member_count;
chit_name;
  ngOnInit() {
this.upcoming();
this.memberRequested();
}
upcoming(){
   this.reg.upcomingfund().subscribe((data:any[]) => {
       console.log("upppppppppppp",data);
       this.member.fundpopdata = data;
       console.log("serrrrrrrrrrrrrrrrrr",this.member.fundpopdata);

            this.chit = data['upcomingfunds'];
            this.member_count = data['count'];
            this.requestedcount = data['requestcount']
  });
}
viewmoredetails(chit){
    const dialogRef = this.dialog.open(chitdetails, {
        data:chit,
      disableClose : true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed im in married popup data in to main',result);

    });
}
requestpopshow;
reqFundDetails(chit){
  console.log("iddddddddddddddddd########",chit)
  this.member.requestpopshow = chit;
  const dialogRef = this.dialog.open(RequestdFunds,{
      disableClose : true,


  });

}



public showc;
chitrequest(data){

  console.log("ffffffff",data);
  const dialogRef = this.dialog.open(sendRequest,{
    width:'67%',
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log("resulttt1112",typeof(result),result);
    this.showc = result.count;
  var countarray = []
  let a=parseInt(result.count);
  console.log("ssssssssss",a,result);
  for( var i=0;i<a;i++){
    countarray.push(i);
  }
  var chitdata = {"id":data,"count":countarray}
  this.member.sendchitrequest(chitdata).subscribe(data =>{
    $(this.sendrequestresp.nativeElement).modal('show');
    this.ngOnInit();
  });
  console.log("finalllllll",countarray);


  })
}

public requesteddata;
public request = false;
public requestedcount;
memberRequested(){
  // this.request = true;
  this.member.requestedfunds().subscribe(data =>{
    this.member.reqfund = data;
    console.log("kkkkkkkkk",data);
    this.requesteddata = data['chit_dict'];
    this.requestedcount = data['count']



  })
}
memberReq(){
  this.request = true;
}

memberupcoming(){
  this.request = false;
}



}


@Component({
  selector: 'chitdetails',
  templateUrl: './chitdetails.html',
  styleUrls: ['./upcomingfunds.component.css']
})
export class chitdetails implements OnInit{
    constructor( public chitRef: MatDialogRef<chitdetails>,public dialogRef: MatDialogRef<chitdetails>,public member:MemberService){}

public popupdata;
public data;
ngOnInit(){

    this.popupdata = this.member.fundpopdata;
    console.log("fund detailsssssssssssssssssssss",this.popupdata);
    this.data = this.popupdata['upcomingfunds']
    console.log("daaaaaaaaaaaaaaaaa",this.data);


}

  closepop() {
    console.log("popup closed");
    this.chitRef.close();
  }


      onNoClick(): void {
    this.dialogRef.close();
  }





}


@Component({
  selector: 'RequestdFunds',
  templateUrl: 'RequstdFund.html',
  styleUrls: ['./upcomingfunds.component.css']
})

export class RequestdFunds{
  constructor(public reqRef: MatDialogRef<RequestdFunds>,public dialogRef: MatDialogRef<RequestdFunds>,public member:MemberService){}
public reqfdata;

ngOnInit(){
  this.reqfdata = this.member.requestpopshow;
  console.log("reeeeeeeeeeeeeeeeeeee",this.reqfdata);


}

closepop() {
  console.log("popup closed");
  this.reqRef.close();
}

      onNoClick(): void {
    this.dialogRef.close();
  }

}




@Component({
  selector: 'sendRequest',
  templateUrl: 'sendrequest.html',
  styleUrls: ['./upcomingfunds.component.css']
})

export class sendRequest{

  constructor(public dialogRef: MatDialogRef<sendRequest>){

  }



public user:any = {};

      onNoClick(): void {
        console.log("closeddddddd");
          this.dialogRef.close();


        }
  public chitcount = [1,2,3,4,5];
}
