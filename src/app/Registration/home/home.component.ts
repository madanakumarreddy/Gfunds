import { Component, OnInit } from '@angular/core';
import { Faq, Termsconditions, Privacypolicy } from '../../shared/footer/footer.component';
import { MatDialog } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog, private overlay: Overlay) { }
  ngOnInit() {
  }
  private name = 'string';
  openpopprivacy(): void {
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
      height: '100%',
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
      height: '100%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }
}
