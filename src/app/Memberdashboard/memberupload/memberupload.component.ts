import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MemberService } from '../../Services/Memberservice/member.service';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-memberupload',
  templateUrl: './memberupload.component.html',
  styleUrls: ['./memberupload.component.css']
})
export class MemberuploadComponent implements OnInit {

  public memUpload: File;
  public successmess;
  public msg;
  public msg1;
  public msg2;
  public msg3;
  public msg4;
  public msg5;
  public msg6;
  public msg7;
  public button1 = true;
  public button2 = true;
  public button3 = true;
  public button4 = true;
  public button5 = true;
  public button6 = true;
  public button7 = true;
  public button8 = true;
  public button9 = true;
  public button10 = true;
  public button11 = true;
  public button12 = true;
  public enablepload = false;
  public mesdisplay;
  public uploadDisable = false;
  public docCount = 0;
  public files = new FormData();
  public memberdetails: any;

  constructor(public memServ: MemberService, private router: Router) { }
  @ViewChild('PopRes1') PopRes1: ElementRef;

  ngOnInit() {
    this.memServ.viewprofile().subscribe(data => {
      const profession = data['data'];
      this.memberdetails = profession[0].profession;
      console.log("gpppppppppp", this.memberdetails);
    });
  }

  uploadok() {
    $(this.PopRes1.nativeElement).modal('show')
  }

  success() {
    this.router.navigate(['/dashboard/memberhome'])
  }



  // selfFarmer1(event){
  // 	 this.memUpload = event.target.files[0]
  // 	 console.log("onlyyyyyyy file",this.memUpload['type']);
  //    this.button1=false;
  // }

  // selfFarmer2(event){
  //    this.memUpload = event.target.files[0]
  //    console.log("onlyyyyyyy file",this.memUpload['type']);
  //    this.button2=false;
  // }

  // selfFarmer3(event){
  //    this.memUpload = event.target.files[0]
  //    console.log("onlyyyyyyy file",this.memUpload['type']);
  //    this.button3=false;
  // }

  // selfFarmer4(event){
  //    this.memUpload = event.target.files[0]
  //    console.log("onlyyyyyyy file",this.memUpload['type']);
  //    this.button4=false;
  // }

  // selfFarmer5(event){
  //    this.memUpload = event.target.files[0]
  //    console.log("onlyyyyyyy file",this.memUpload['type']);
  //    this.button5=false;
  // }

  // selfFarmer6(event){
  //    this.memUpload = event.target.files[0]
  //    console.log("onlyyyyyyy file",this.memUpload['type']);
  //    this.button6=false;
  // }

  // selfFarmer7(event){
  //    this.memUpload = event.target.files[0]
  //    console.log("onlyyyyyyy file",this.memUpload['type']);
  //    this.button7=false;
  // }

  // selfFarmer8(event){
  //    this.memUpload = event.target.files[0]
  //    console.log("onlyyyyyyy file",this.memUpload['type']);
  //    this.button8=false;
  // }

  // selfFarmer9(event){
  //    this.memUpload = event.target.files[0]
  //    console.log("onlyyyyyyy file",this.memUpload['type']);
  //    this.button9=false;
  // }

  // selfFarmer10(event){
  //    this.memUpload = event.target.files[0]
  //    console.log("onlyyyyyyy file",this.memUpload['type']);
  //    this.button10=false;
  // }

  // selfFarmer11(event){
  //    this.memUpload = event.target.files[0]
  //    console.log("onlyyyyyyy file",this.memUpload['type']);
  //    this.button11=false;
  // }

  // selfFarmer12(event){
  //    this.memUpload = event.target.files[0]
  //    console.log("onlyyyyyyy file",this.memUpload['type']);
  //    this.button12=false;
  // }

  // uploadMemberDocsForPresentAdd(){
  // 	const fd = new FormData()
  //    fd.append("memberpresent",this.memUpload)
  //    if(this.memUpload['type']=="image/png"||this.memUpload['type']=="image/jpeg"){
  //           this.memServ.presentAddresfile(fd).subscribe(backfile =>{

  //     console.log("backkkkkkkkkk",backfile);
  //     this.msg = backfile;
  //   });
  //    }
  // 	else{
  //     alert("Only JPG and PNG  files are allowed.")
  //   }
  //   }
  // uploadMemberDocsForBank(){
  // 	const fd = new FormData()
  //    fd.append("memberbank",this.memUpload)
  // 	if(this.memUpload['type']=="image/png"||this.memUpload['type']=="image/jpeg" || this.memUpload['type'] == 'application/pdf'){
  //          this.memServ.presentAddresfile(fd).subscribe(backfile =>{

  //     console.log("backkkkkkkkkk",backfile);
  //     this.msg1 = backfile;
  //   });
  //    }
  //   else{
  //     alert("Only JPG and PNG  files are allowed.")
  //   }
  // }

  // uploadMemberDocsForAadhar(){
  // 	const fd = new FormData()
  //    fd.append("memberadhar",this.memUpload)
  // 	if(this.memUpload['type']=="image/png"||this.memUpload['type']=="image/jpeg"){
  //          this.memServ.presentAddresfile(fd).subscribe(backfile =>{

  //     console.log("backkkkkkkkkk",backfile);
  //     this.msg2 = backfile;
  //   });
  //    }
  //   else{
  //     alert("Only JPG and PNG  files are allowed.")
  //   }
  // }

  // uploadMemberDocsForPan(){
  // 	const fd = new FormData()
  //    fd.append("memberpan",this.memUpload)
  // 	if(this.memUpload['type']=="image/png"||this.memUpload['type']=="image/jpeg"){
  //          this.memServ.presentAddresfile(fd).subscribe(backfile =>{

  //     console.log("backkkkkkkkkk",backfile);
  //     this.msg3 = backfile;
  //   });
  //    }
  //   else{
  //     alert("Only JPG and PNG  files are allowed.")
  //   }
  // }
  // uploadMemberDocsForPay1(){
  //   console.log(this.memUpload['type']);
  // 	const fd = new FormData()
  //    fd.append("memberpay1",this.memUpload)
  //    console.log("6666666",fd)
  // 	if(this.memUpload['type']=="image/png"||this.memUpload['type']=="image/jpeg" || this.memUpload['type'] == 'application/pdf'){
  //          this.memServ.presentAddresfile(fd).subscribe(backfile =>{

  //     console.log("backkkkkkkkkk",backfile);
  //     this.msg4 = backfile;
  //   });
  //    }
  //   else{
  //     alert("Only JPG and PNG  files are allowed.")
  //   }
  // }
  // uploadMemberDocsForPay2(){
  // 	const fd = new FormData()
  //    fd.append("memberpay2",this.memUpload)
  // 	if(this.memUpload['type']=="image/png"||this.memUpload['type']=="image/jpeg" || this.memUpload['type'] == 'application/pdf'){
  //          this.memServ.presentAddresfile(fd).subscribe(backfile =>{

  //     console.log("backkkkkkkkkk",backfile);
  //     this.msg5 = backfile;
  //   });
  //    }
  //   else{
  //     alert("Only JPG and PNG  files are allowed.")
  //   }
  // }
  // uploadMemberDocsForPay3(){
  // 	const fd = new FormData()
  //    fd.append("memberpay3",this.memUpload)
  // 	if(this.memUpload['type']=="image/png"||this.memUpload['type']=="image/jpeg" || this.memUpload['type'] == 'application/pdf'){
  //          this.memServ.presentAddresfile(fd).subscribe(backfile =>{

  //     console.log("backkkkkkkkkk",backfile);
  //     this.msg6 = backfile;
  //   });
  //    }
  //   else{
  //     alert("Only JPG and PNG  files are allowed.")
  //   }
  // }

  // uploadMemberDocsForId(){
  // 	const fd = new FormData()
  //    fd.append("memberid",this.memUpload)
  // 	if(this.memUpload['type']=="image/png"||this.memUpload['type']=="image/jpeg"){
  //          this.memServ.presentAddresfile(fd).subscribe(backfile =>{
  //     console.log("backkkkkkkkkk",backfile);
  //     this.msg7 = backfile;
  //   });
  //    }
  //   else{
  //     alert("Only JPG and PNG  files are allowed.")
  //   }
  // }

  allFilesUploadFun(event, docName) {
    const f1 = event.target.files[0];
    if (this.files.has(docName)) {
      this.files.delete(docName);
      this.files.append(docName, f1);
    } else {
      this.files.append(docName, f1);
      console.log('files..list', this.files);
      this.docCount++;
      if (this.memberdetails == 'Salaried') {
        console.log('docccc lennnnnn', this.docCount)
        if (this.docCount == 8) {
          this.uploadDisable = true;
        }
      } else {
        if (this.docCount == 4) {
          this.uploadDisable = true;
        }
      }
    }
  }

  uploadAllFiles() {
    this.memServ.presentAddresfile(this.files).subscribe(backfile => {
      console.log("backkkkkkkkkk", backfile);
      this.successmess = backfile;
      if (this.successmess == "succsessfully saved") {
        this.mesdisplay = "Documents Uploded Successfully";
      } else {
        this.mesdisplay = "Failed TO Upload Documents";
      }
      $(this.PopRes1.nativeElement).modal('show')
    });
  }
}
