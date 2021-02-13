import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../Services/registrationservice/registration.service';
import { from } from 'rxjs';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';

declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginModel: RegistrationService, public dialog: MatDialog) { }
  public i = 0;
  public j = 0;
  public chitid;
  public chitcount;
  public currentauction;
  public paidAmount;

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


  deposit() {
    if (this.finaldata[this.j].res) {
      console.log("if22222222", this.finaldata[this.j])
      if (this.finaldata[this.j].res == "True") {
        this.chitid = this.finaldata[this.j].chit_id;
        this.chitcount = this.finaldata[this.j].count;
        this.loginModel.transdetails = this.finaldata[this.j];
        this.loginModel.transcount = this.tcount;
        const dialogRef = this.dialog.open(popupdetails, {
          disableClose: true,
          // width: '70%',
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log("a###########", result)
          let transdata = { "transid": result['trans'], "chitid": this.chitid, "chitcount": this.chitcount }
          this.loginModel.transactions(transdata).subscribe(data => {
            console.log("responseeeeeeeee data", data)
          })
          console.log("beforeeeeee close", this.j)
          this.j = this.j + 1;
          console.log("inceeeeeee increment", this.j)
          this.deposit()
        });
      }

    }
  }


  simple() {

    console.log("simpleeeeeeeeeeeeee")
    if (this.membertransaction[this.i]) {
      console.log("yyyyyyyyyyyyyyyy")
      if (this.membertransaction[this.i] !== false) {
        console.log("insideeeeeeeeeeeeMadana", this.membertransaction[this.i])
        console.log("saaa marayyyyaaaa")
        if (this.membertransaction[this.i].res == true) {
          console.log("truuuueeeeeeeeeeeeee")
          this.chitid = this.membertransaction[this.i].chit_id;
          this.currentauction = this.membertransaction[this.i].auction
          this.chitcount = this.membertransaction[this.i].membercount;
          this.paidAmount = this.membertransaction[this.i].amount;
          this.loginModel.transdetails = this.membertransaction[this.i];
          this.loginModel.transcount = this.tcount;
          const dialogRef = this.dialog.open(transactionpopup, {
            disableClose: true,
            // width: '50%',
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log("yyyyyyyysachi", result);
            let data = {
              "trans": result['auctiontrans'], "chitid": this.chitid, "chitcount": this.chitcount,
              "auctioncount": this.currentauction,"paidAmount":this.paidAmount
            }
            console.log("yyyyyyyysachi", data);
            this.loginModel.auctiontransdata(data).subscribe(data => {
              console.log("reeeeqqqqqqqqqq", data)
            })
            this.i = this.i + 1;
            this.simple()
          });

        }

        else if (this.membertransaction[this.i].res == "CLOSE") {
          console.log("CLOOOOOOOOOOOOOOOO")
          this.chitid = this.membertransaction[this.i].chit_id;
          this.currentauction = this.membertransaction[this.i].auction;
          this.chitcount = this.membertransaction[this.i].membercount;
          this.paidAmount = this.membertransaction[this.i].amount;
          this.loginModel.transdetails = this.membertransaction[this.i];
          this.loginModel.transcount = this.tcount;
          const dialogRef = this.dialog.open(transactionpopup, {
            disableClose: true,
            // width: '50%',
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log("yyyyyyyysiva", result);
            let data;
            if (result.rtm == true) {
              data = {
                "trans": "xxxxxxxxxx", "chitid": this.chitid, "chitcount": this.chitcount,
                "auctioncount": this.currentauction,"paidAmount":this.paidAmount
              }
            }
            else {
              data = {
                "trans": result['auctiontrans'], "chitid": this.chitid, "chitcount": this.chitcount,
                "auctioncount": this.currentauction,"paidAmount":this.paidAmount
              }
            }
            console.log("yyyyyyyysiva", data);
            this.loginModel.auctiontransdata(data).subscribe(data => {
              console.log("reeeeqqqqqqqqqq", data)
            })
            this.i = this.i + 1;
            this.simple()
          });

        }
        else {

          this.i = this.i + 1;
          this.simple()
        }


      }

      else {
        // while(this.i == this.membertransaction.length){
        console.log("i m in elseeee")
        this.i += 1;
        this.simple()
        // }
      }
    }
    else {

      if (this.i <= this.membertransaction.length) {
        this.i += 1;
        this.simple()

      }
    }

  }
  public finaldata;
  public tcount;
  public membertransaction;
  public err;

  login(user) {

    console.log(user);
    this.loginModel.login(user).subscribe(data => {

      console.log("wwwww", data['role'])
      if (data['role']) {
        localStorage.setItem('token', data['token'])
        this.loginModel.showprofilepic = data['role']['front_photo'];
        if (data['role']['role'] == "member") {
          if (data['role']['front_photo']) {
            this.router.navigate(['./dashboard/memberhome']);
          }
          else {
            this.router.navigate(['./dashboard/memberfinalreg']);
          }
          this.loginModel.dashboarddetails().subscribe(data => {
            console.log("rrrrrrrr333333@@@@@@@@!!!!!!!!!!!", data);


            this.finaldata = data['trans']
            console.log("hhhhhhhhhhhhhhhhhhhhhh", this.finaldata);
            if (this.finaldata) {
              this.tcount = this.j;
              console.log("deposit%%%%%%%%%%%", this.tcount)
              this.deposit()
            }
            this.membertransaction = data['trans_popup']
            console.log("@@@@@@@@@@", this.membertransaction)
            this.tcount = this.i;
            console.log("222222222", this.tcount);
            this.simple()


          })

        }
        else if (data['role']['role'] == "foreman") {
          if (data['role']['front_photo']) {
            this.router.navigate(['./foreman/foremanhome']);
          }
          else {
            this.router.navigate(['foreman/foremanreg']);
          }
        }
        else if (data['role']['role'].toLowerCase() == "admin") {
          this.router.navigate(['/Adminhomepage/Adminmanagemember']);
        }

        else if (data['role']['role'].toLowerCase() == "rtm") {
          console.log("rtttttyyyyyyyyy")
          this.router.navigate(['/rtm-dashboard/loanrequest']);
        }
        else if (data['role']['role'].toLowerCase() == 'ca') {
          console.log("caaaa log in happen")
          this.router.navigate(['/ca/cahome']);
        }
      }


      else {

        this.err = data;
        console.log("eeeeeeeeeeeeee", this.err);
      }


    });



  }



  ngOnInit() {



    // this.loginModel.Profilepic().subscribe(data =>{
    //   console.log("profileeeeeepicccccccccc",data);
    // });


  }
  public user: any = {}

}


@Component({
  selector: 'popupdetails',
  templateUrl: './popupdetails.html',
  styleUrls: ['./login.component.css']
})
export class popupdetails {
  public finaltrans: any = {};
  public counts: any = {}
  private router: Router
  constructor(public logintrans: RegistrationService, private route: Router, public dialogRef: MatDialogRef<popupdetails>) {
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    this.finaltrans = this.logintrans.transdetails;
    this.counts = this.logintrans.transcount;

  }

  public membertrans: any = {};
  onNoClick(data): void {
    console.log("afterrrrrrrrr closeeeeeee")
    this.dialogRef.close();
  }

  logoutpop() {
    localStorage.removeItem('token');
    this.dialogRef.close();
    this.route.navigate(['/login'])
  }
}


@Component({
  selector: 'transactionpopup',
  templateUrl: './transactionpopup.html',
  styleUrls: ['./login.component.css']
})
export class transactionpopup {
  public transdetails1: any = {};
  public transcounts: any = {}
  constructor(public logintrans: RegistrationService, public router: Router, public dialogRef: MatDialogRef<transactionpopup>) {
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    this.transdetails1 = this.logintrans.transdetails;
    console.log("&&&&&&&&&&&", this.transdetails1);
    this.transcounts = this.logintrans.transcount;

  }
  public aucttrans: any = {}



  onNoClick(data): void {
    console.log("afterrrrrrrrr closeeeeeee")
    this.dialogRef.close();
  }

  logouttrans() {
    localStorage.removeItem('token');
    localStorage.removeItem('testing');

    this.dialogRef.close();
    this.router.navigate(['/login'])

  }

}
