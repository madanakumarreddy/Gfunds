import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { ForemanfileService } from '../../Services/foremanupload/foremanfile.service';
import {Router} from "@angular/router";

declare var $;

@Component({
  selector: 'app-uploaddocuments',
  templateUrl: './uploaddocuments.component.html',
  styleUrls: ['./uploaddocuments.component.css']
})
export class UploaddocumentsComponent implements OnInit {

  constructor( public filesToSer:ForemanfileService,private router: Router) { }

  @ViewChild('PopRes') PopRes:ElementRef;
  @ViewChild('PopRes1') PopRes1:ElementRef;
  @ViewChild('PopRes2') PopRes2:ElementRef;
  @ViewChild('PopRes3') PopRes3:ElementRef;




  ngOnInit() {
  }
  public sachi:File;
  public userser;

  uploadok(userser){
  console.log("foremannnnnnnnnnnn docks",userser);
  this.filesToSer.forfinalreg(userser).subscribe(data =>{  
  });
  this.router.navigate(['/foreman/foremanhome'])

  }

  selectCertOfReg(event){
    console.log("Fileeeeeeefrom event",event);
    this.sachi = event.target.files[0]
    console.log("tttttyyyyyy",this.sachi['type']);

  }

bfile;
  uploadCertOfRegFile(){
    const fd = new FormData();
    fd.append("val",this.sachi)
    if(this.sachi['type']=="image/png"||this.sachi['type']=="image/jpeg"){
      console.log("SSSSSSSSSSSSSSSSSSSSS1", fd)
           this.filesToSer.fileOfAdress(fd).subscribe(backfile =>{
      console.log("backkkkkkkkkk",backfile);
      this.bfile = backfile;
      $(this.PopRes.nativeElement).modal('show')

    });
     }
    else{
      alert("Only JPG and PNG  files are allowed.")
    }
  }
bfile1;
uploadAdressFile(){
  const fd = new FormData();
  fd.append("address",this.sachi)
  if(this.sachi['type']=="image/png"||this.sachi['type']=="image/jpeg"){
           this.filesToSer.fileOfAdress(fd).subscribe(backfile =>{
      console.log("backkkkkkkkkk",backfile);
            this.bfile1 = backfile;

            $(this.PopRes1.nativeElement).modal('show')

    });
     }
    else{
      alert("Only JPG and PNG  files are allowed.")
    }

}
bfile2;
uploadFraternityFile(){
  const fd = new FormData()
  fd.append("fretarnity",this.sachi)
 if(this.sachi['type']=="image/png"||this.sachi['type']=="image/jpeg"){
           this.filesToSer.fileOfAdress(fd).subscribe(backfile =>{
      console.log("backkkkkkkkkk",backfile);
       this.bfile2 = backfile;

            $(this.PopRes2.nativeElement).modal('show')

    });
     }
    else{
      alert("Only JPG and PNG  files are allowed.")
    }
}
bfile3
  uploadBankFile(){
  const fd = new FormData()
  fd.append("bankstate",this.sachi)
if(this.sachi['type']=="image/png"||this.sachi['type']=="image/jpeg" || this.sachi['type']== 'application/pdf'){
           this.filesToSer.fileOfAdress(fd).subscribe(backfile =>{
      console.log("backkkkkkkkkk",backfile);
      this.bfile3 = backfile;

            $(this.PopRes3.nativeElement).modal('show')

    });
     }
    else{
      alert("Only JPG,PNG and PDF  files are allowed.")
    }
}


}
