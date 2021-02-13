import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';

export interface DialogData {
  
    name: string;
  }

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog,private overlay:Overlay) { }

  ngOnInit() {
  }
  private name = "string";

  privacy(): void {
    const dialogRef = this.dialog.open(Privacypolicy, {
      width: '80%',
      

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }

  openpopterms(): void {
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    
    const dialogRef = this.dialog.open(Termsconditions, {
      width: '70%',
      height:'100%',
      scrollStrategy,
      

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }

  openpopfaq(): void {
    const dialogRef = this.dialog.open(Faq, {
      width: '80%',
      height:'100%',
      

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }

}
@Component({
  selector: 'privacypolicy',
  templateUrl: 'privacypolicy.html',
})
export class Privacypolicy {

  constructor(
    public dialogRef: MatDialogRef<Privacypolicy>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'termsconditions',
  templateUrl: 'termsconditions.html',
})
export class Termsconditions {

  constructor(
    public dialogRef: MatDialogRef<Termsconditions>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'faq',
  templateUrl: 'faq.html',
})
export class Faq {

  constructor(
    public dialogRef: MatDialogRef<Faq>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
