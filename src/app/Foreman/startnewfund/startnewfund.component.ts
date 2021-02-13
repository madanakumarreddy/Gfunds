import { Component, OnInit ,Inject,ElementRef,ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import {ForemanfileService} from '../../Services/foremanupload/foremanfile.service';

declare var $;


export interface DialogData {
  
    name: string;
  }

@Component({
  selector: 'app-startnewfund',
  templateUrl: './startnewfund.component.html',
  styleUrls: ['./startnewfund.component.css']
})
export class StartnewfundComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  ngOnInit() {
  }

 private name = "string";
 public chit_type;
  duration(): void {
    
          this.chit_type = {"type":"Fixed Duration"}
          console.log("8888888888888",this.chit_type)
         const dialogRef = this.dialog.open(newchit, {
         width: '800px',
        });
    
}
}

@Component({
  selector: 'newchit',
  templateUrl: 'newchit.html',
   styleUrls: ['./startnewfund.component.css']

})

export class newchit implements OnInit {
  @ViewChild('chitres') chitres:ElementRef;
constructor(
    public dialogRef: MatDialogRef<newchit>,
    public createchit:ForemanfileService,public dialog: MatDialog) {}
ngOnInit(){}

   onNoClick(): void {
    this.dialogRef.close();
  }
  public newchit:any = {}
  public chitdata12;
  name;
  public chit_type;
  
  chitsave(){

  this.dialogRef.close();
  console.log("chiiiiiiiii",this.newchit);
  let data = {"chit":this.newchit,"type":"Fixed Duration"}
  this.createchit.createnewchit(data).subscribe(data =>{
  console.log("baaaaaaaaaaaa",data);
  const dialogRef = this.dialog.open(chitpopup, {
         width: '600px',
        });
  
  })
  
  }
}



@Component({
  selector: 'chitRes',
  templateUrl: 'chitresponse.html',
})

export class chitpopup implements OnInit {
constructor(
    public dialogRef: MatDialogRef<chitpopup>) {}
ngOnInit(){}

   onNoClick(): void {
    this.dialogRef.close();
  }
  
}