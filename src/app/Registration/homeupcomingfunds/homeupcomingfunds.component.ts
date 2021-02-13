import { Component, OnInit,Inject,ElementRef,ViewChild } from '@angular/core';
import {AdminService} from '../../Services/Adminservice/admin/admin.service';
declare var $: any;
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-homeupcomingfunds',
  templateUrl: './homeupcomingfunds.component.html',
  styleUrls: ['./homeupcomingfunds.component.css']
})
export class HomeupcomingfundsComponent implements OnInit {
 @ViewChild('morepop') morepop:ElementRef;

constructor(public reg1:AdminService) { }
newobject:any=[];
public totalUsers;
public onelakh;
public twolakh;
public fivetoten;
public tentofifteen;
public lastrange;
public month1;
public month2;
public month3;
public month4;
public month5;
public itemsPerPage123;
public p;
public usersPerPage;
test:any;

  ngOnInit() {
      this.reg1.homeupcoming().subscribe(data=>{
          console.log("arerereee",data)

        this.newobject = data.filter(function (data) {
            return data.status === "UPCOMING";
          });
         
      })
  }
obj:any=[];
moredtails(data){
  this.obj = data;
  console.log("kkkkkkkkkkkk", this.obj);
  $(this.morepop.nativeElement).modal('show');
}

  company:any;
  location:any=[];
  selectMonth:any=[];
  chitAmount:any=[];
  chit_status:string="UPCOMING"
selection(category, item, value) {
console.log("aaaaa",category,item,value);
        switch (category) {
            case 'company':
                var idx = this.company.indexOf(item);
                console.log(item);
                if (idx > -1) {
                   this.company.splice(idx, 1);
                } else {
                    this.company.push(item);
                }
                break;
            case 'location':
                var idx = this.location.indexOf(item);

                if (idx > -1) {
                    this.location.splice(idx, 1);
                } else {
                    this.location.push(item);
                }
                break;
            case 'months':
                var idx = this.selectMonth.indexOf(item);
                console.log("fdddddddddddddddd",idx)
                if (idx > -1) {
                    this.selectMonth.splice(idx, 1);
                } else {
                    this.selectMonth.push(item);
                }
                break;
            case 'chitamount':
                var idx = this.chitAmount.indexOf(item);
                if (idx > -1) {
                    this.chitAmount.splice(idx, 1);
                } else {
                    this.chitAmount.push(item);
                }
        }

       var cumulative = [this.company, this.location, this.selectMonth, this.chitAmount, this.chit_status];
       console.log(cumulative)
       this.reg1.filterconcept(cumulative).subscribe(data=> {
            console.log(data);
            if (data.STATUS == "UPCOMING") {
               this.newobject= data.VALUES;
                console.log("116", data.VALUES);
                this.test = data.COUNT>0;
                console.log("125", this.test);
            } else {
               this.newobject = data.VALUES;
                console.log("116", data.VALUES);
                // $scope.totalUsers = data.COUNT;
                // console.log("125", $scope.totalUsers);
            }
        });
// this.ngOnInit();
    }

    perPage=2;

  userpag(newobject:any){
  this.perPage = newobject;
  console.log("aaaadddfff",this.perPage)
}
}
