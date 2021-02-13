import { Component, OnInit } from '@angular/core';
import {RtmService} from '../../Services/Rtm/rtm.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-loanrequest',
  templateUrl: './loanrequest.component.html',
  styleUrls: ['./loanrequest.component.css']
})
export class LoanrequestComponent implements OnInit {

  constructor(public rtmserv:RtmService,public dialog:MatDialog) {  }

public loandetails:any;
public status:any={}; 

  ngOnInit() {
this.getdisburseloan()
  }
  public getdisburseloan(){
    this.rtmserv.rtmloan_status().subscribe(data=>{
        console.log("loannnnnnnnnnnnnnnnnn",data);
        this.loandetails=data;
        console.log("loandetailssss",this.loandetails);
        this.rtmserv.serdata = data;

      });
  }
  public popupdetails:any;
  acceptloan1(data){
  	const dialogpop = this.dialog.open(disAmount,{
  disableClose : true,
	});
	dialogpop.afterClosed().subscribe(result=>{
  console.log("poppppppppppppppppppp",result);
  this.popupdetails = result;
  let memberdetails=this.loandetails; 
  let popupdetails=this.popupdetails; 
  let data={"loandetail":memberdetails,"popdata":popupdetails}
  console.log("finballlllllll",data);
  this.rtmserv.disbursedloan(data).subscribe(data=>{
    console.log("backenddata",data);
    this.getdisburseloan();
  });
  
  });


  }


}
@Component({
  templateUrl: 'dishbursed.html',
  styleUrls: ['./loanrequest.component.css']
})
export class disAmount{
	constructor(public dialogRef: MatDialogRef<disAmount>,public rtmserv:RtmService){}

public popdatais:any = {};
public trans;


	ngOnInit() {

this.popdatais = this.rtmserv.serdata

console.log("dataaaaaa in popppppppp",this.popdatais)
	}
	public user;
	closePop():void{
		this.dialogRef.close();
	}



}