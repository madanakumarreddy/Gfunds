import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/Adminservice/admin/admin.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-managechit',
  templateUrl: './managechit.component.html',
  styleUrls: ['./managechit.component.css']
})
export class ManagechitComponent implements OnInit {
  public closed;
  constructor( public admin:AdminService, public dialog:MatDialog) { }
  public backdata:any;
  ngOnInit() {
    // console.log("-------++----  bef",aaa);
  	this.admin.fundmanage().subscribe(backdata =>{
      console.log("-------++---- aft  ",backdata);
  		this.managefundsdata = backdata['data'];
      this.admin.fundmanagedata = backdata;
      this.closed=backdata['data']

  	});
  }
  public managefundsdata;
  public searchText= "";
  public p;
  public usersPerPage;

public itemsPerRecord = 5;

  size(data){
    console.log("AAAAAAAAAAAAAAAA",data);
    this.itemsPerRecord = data;
  }
viewmanagechits(){
const dialogpop = 	this.dialog.open(ManageChitPop,{
  disableClose : true,
  height:"500px",
  width:"500px"
  });
  
dialogpop.afterClosed().subscribe(result=>{
  let data = {"data":result.data,"status":''}
  this.admin.updatemanagfunds(data).subscribe(updatedata => {
  });
});
}

public chitid;
getchitid(id){
   this.chitid = id
}
 deletemanagechit(status){
   let data = {"id":this.chitid,"status":status}
   this.admin.deletemanagfunds(data).subscribe(backdata =>{
    this.ngOnInit();
   });
 }
}

@Component({
	selector : 'manage-chitdialog',
	templateUrl:'viewmanagechit.html'
})


export class ManageChitPop{
editflag:boolean=true;
  enableEdit: boolean = false;
  enableEdit1: boolean = true;
	constructor(public dialogRef: MatDialogRef<ManageChitPop>,public admin:AdminService){}

  public fundManage:any = {};
  public editable;
  public edit;
  public showPopup;
  public chitDetails;

  ngOnInit() {
    this.fundManage  = this.admin.fundmanagedata
    console.log("hiiiiiiiiiiiii",this.fundManage);
    }
    call()
    {
      this.edit=true;
      this.editflag=false;
      this.enableEdit=true;
      this.enableEdit1=false;
    }

	closePop():void{
		this.dialogRef.close();
	}


}
