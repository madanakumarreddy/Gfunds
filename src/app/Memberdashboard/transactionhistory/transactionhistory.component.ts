import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../Services/Memberservice/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {

  constructor(public memser:MemberService,public router:Router) { }


public trans = [];
public chitno;
public chitimg;
public chitid;
public chitDetails = [];
public uniqChits = [];
public hideShowtrans = false;

  ngOnInit() {
let data = {"status":"RUNNING"}
      console.log('tyrytrrrrrrrrrrrrrr',data)

  	this.memser.transDetail(data).subscribe(backdata =>{
  		console.log("dataaaaaaa@@@@@@@@@@@@@@##############",backdata,typeof(backdata));
      this.trans = backdata;    

      this.trans.sort((a, b) => (b.trans_date > a.trans_date) ? 1 : -1)
      console.log("qqqqqqqqqqqqq",typeof(this.trans));
      
      this.trans.forEach(element => {
        if (this.uniqChits.length == 0){
          this.uniqChits.push(element);
        }else{
          let val = this.uniqChits.find(ch => ch.chit == element.chit)
          if(!val){
            this.uniqChits.push(element);
          }
        }
      });

  	});

  }

  viewTransData(chitId){
    this.chitDetails = this.trans.filter(elm => elm.chit == chitId);
    this.hideShowtrans = true;
    console.log("chit transss dataaaaaa",this.chitDetails);
  }

 
  membertransactiondetails(dataid){
    let data = {"data2":dataid,"status":'count'}
    this.memser.memtrans(data).subscribe(backdata =>{
      console.log("backkkdataaaaaaaaaaaaa",backdata);
      this.memser.memdatatrans = backdata;
      this.router.navigate(['./dashboard/membertransdetails']);

    });

  }

  backTouniqFund(){
    this.hideShowtrans = false;
  }

}


@Component({
  selector: 'memberTransaction',
  templateUrl: './memberTransaction.html',
  styleUrls: ['./transactionhistory.component.css']
})

export class memberTransaction implements OnInit{

constructor(public memser:MemberService,public router:Router){}

trans;
ngOnInit(){

  if(this.memser.memdatatrans !== "No transactions"){
  this.trans = this.memser.memdatatrans;
  console.log("trrrr1111111111111111111111",this.trans);
  }
}

transactionrecord(dataid){
  let data = {"data2":dataid,"status":''}
    this.memser.memtrans(data).subscribe(backdata =>{
      this.memser.memcount = backdata;
      this.router.navigate(['./dashboard/Transactions']);
});

}

public transshow;
public onlytrans = false;
getmembertrans(dataid,count){
  this.onlytrans = true;
  let data = {"data2":dataid,"status":'',"count":count}
    this.memser.memtrans(data).subscribe(backdata =>{
      console.log("6666666666",backdata)
      this.transshow = backdata

});

}
memtransback(){
  this.router.navigate(['./dashboard/transactionhistory']);
  }

 backtomember(){
   this.onlytrans = false;
 }

}




