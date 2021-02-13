import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {AdminService} from '../../Services/Adminservice/admin/admin.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';

declare var $;
@Component({
  selector: 'app-manageupcomingchits',
  templateUrl: './manageupcomingchits.component.html',
  styleUrls: ['./manageupcomingchits.component.css']
})
export class ManageupcomingchitsComponent implements OnInit {
  @ViewChild('fundResponse') fundResponse:ElementRef;
  constructor(public admin:AdminService,public dialog:MatDialog) { }
public searchText = '';
  public upcomingdata;
  public p;
  public usersPerPage;
  public closed;
  ngOnInit() {
  	this.upcoming();

  }



itemsPerRecord = 5;

size(data){
  console.log("AAAAAAAAAAAAAAAA",data);
  this.itemsPerRecord = data;
}


  upcoming(){
    this.admin.upcomingchit().subscribe(upcomingfunds =>{
      console.log("rrrrrrrrrr",upcomingfunds);
      this.upcomingdata = upcomingfunds['chits'];
      console.log("ggggg",this.upcomingdata);
       this.closed=upcomingfunds['chits']
    })
  }
  viewmanagechits(data){
     this.admin.sendupcoming = data;
  	 const dialogRef = this.dialog.open(fraternitydetails,{
  	//  width:'100%',


  });
  dialogRef.afterClosed().subscribe(result => {
    console.log("resulttt",result);
  })
  }
  public success;
  Approveupcomingfund(data,status){
    console.log("wwwwwwwww",data,status);
    let final = {"id":data.id,"status":status};
    this.admin.approveupcomingchit(final).subscribe(data =>{
      this.success = data.res;
      
      console.log("backend response",data.check);
      this.upcoming();
       $(this.fundResponse.nativeElement).modal('show');
    })
  }

}


@Component({
  selector: 'fraternitydetails',
  templateUrl: './fraternitydetails.html',
  styleUrls: ['./manageupcomingchits.component.css']
})
export class fraternitydetails{

  constructor(public dialogRef: MatDialogRef<fraternitydetails>,public admin:AdminService){}
  public manageData:any = {}
  ngOnInit(){
    this.manageData = this.admin.sendupcoming;
    console.log("5555555555555",this.manageData);
  }

   onNoClick(): void {
    this.dialogRef.close();
  }
}
