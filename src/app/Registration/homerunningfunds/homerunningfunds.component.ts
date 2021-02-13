import { Component, OnInit,Inject,ElementRef,ViewChild } from '@angular/core';
import {AdminService} from '../../Services/Adminservice/admin/admin.service';
declare var $: any;
@Component({
  selector: 'app-homerunningfunds',
  templateUrl: './homerunningfunds.component.html',
  styleUrls: ['./homerunningfunds.component.css']
})
export class HomerunningfundsComponent implements OnInit {
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
public company_name;
public test:any;
  ngOnInit() {
      this.reg1.homerunning().subscribe(data=>{
          console.log("arerereee",data)
          this.newobject=data;
      })
  }


public obj:any=[];
moredtails(data){
  this.obj = data;
  console.log("kkkkkkkkkkkkkk", this.obj);
  $(this.morepop.nativeElement).modal('show');
}

  company:any;
  location:any=[];
  selectMonth:any=[];
  chitAmount:any=[];
  chit_status:string="RUNNING"
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
       this. reg1.filterconcept(cumulative).subscribe(data=> {
            console.log(data);
            if (data.STATUS == "RUNNING") {
               this.newobject= data.VALUES;
                console.log("116", data.VALUES);
                // $scope.totalUsers = data.COUNT;
                // console.log("125", $scope.totalUsers);
            } else {
               this.newobject = data.VALUES;
                console.log("116", data.VALUES);
                // $scope.totalUsers = data.COUNT;
                // console.log("125", $scope.totalUsers);
            }
        });

    }

    perPage=2;

  userpag(newobject:any){
  this.perPage = newobject;
  console.log("aaaadddfff",this.perPage)
}


}
