import { Component, OnInit,Inject } from '@angular/core';
import {Router} from "@angular/router";
import { AdminService } from '../../Services/Adminservice/admin/admin.service';
import { RegistrationService } from '../../Services/registrationservice/registration.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
  
@Component({
  selector: 'app-managemember',
  templateUrl: './managemember.component.html',
  styleUrls: ['./managemember.component.css']
})
export class ManagememberComponent implements OnInit {

  searchTerm:string;
  public searchText = '';
  public p;
  

  constructor(private router: Router,public admin:AdminService,public dialog: MatDialog) { }
public members;
  ngOnInit() {
     this.membermanage();
       this.tab(1)


  }


itemsPerRecord = 2;

size(data){
  console.log("AAAAAAAAAAAAAAAA",data);
  this.itemsPerRecord = data;
}


getRating(n){
  var a = [];
         if (n != null) {
             a = new Array(parseInt(n));
         }
 
         return a;
     };

  public list1:any;
  public listchoice:string="New Members";
  membermanage(){
     this.admin.memberlist().subscribe(data=>{
          console.log("enaitu",data);
          this.members=data;
          console.log("RESSSSSSSTRRRRRROOOO",this.members);
          this.list1=this.members.newmember;
      })
  }
  colourPaletteOne;
  selectedColourPalette
  tab(a){
    console.log(a);
      if(a==1){
      this.selectedColourPalette=1
      this.colourPaletteOne = {
        primary: 'blue', 
        secondary: 'grey',    
      }
          this.listchoice="New Members"
       this.list1=this.members.newmember;

      }
      else if(a==2){
        this.selectedColourPalette=2
        this.colourPaletteOne = {
        primary: 'blue', 
        secondary: 'grey',    
      }
          this.listchoice="Approved Members"
this.list1=this.members.approved;
      }
          else if(a==3){
              this.selectedColourPalette=3
            this.colourPaletteOne = {
        primary: 'blue', 
        secondary: 'grey',    
      }
              this.listchoice="Disapproved Members"
this.list1=this.members.unapproved;
          }
  }
  approvemember(data,a){
      data.status=a;
      this.admin.approvemember(data).subscribe(data=>{
          console.log("innodu",data);
          // this.router.navigate(['/Adminhomepage.Adminmanagemember']);
this.membermanage();
      })
  }

 mobille(data) {

    console.log("ManagememberComponent", data);
  }

  details(data1): void {
    let mob = { mobile: data1.mobile_number }
    this.mobille(mob);
    console.log("mobile number", mob)
    this.admin.memberdata(data1).subscribe(data2 => {
      console.log("innodu", data2[0]);
      localStorage.setItem('id', data2[0].id);
      // this.router.navigate(['/Adminhomepage.Adminmanagemember']);
      const dialogRef = this.dialog.open(memberregdetail, {
        height: "100%",
        data: data2[0]
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        // this.userunMarriedData = result;
      });
    })
  }
}





@Component({
  selector: 'memberdetail',
  templateUrl: './memberdetail.html',
  styleUrls: ['./managemember.component.css']
})
export class memberregdetail{
constructor(@Inject(MAT_DIALOG_DATA,) public data: any,
  public dialogRef: MatDialogRef<memberregdetail>,
  private regServ:RegistrationService,
  public admin: AdminService,
  private sanitizer: DomSanitizer
  ) { }


  public state:any=[{}];
  public cities;
  public statename4;
  public code;
  public updatedata;
  

ngOnInit(){
    this.memberData = this.admin.memberData1;
    this.cibilFile(this.memberData);
    this.state = this.regServ.countryList1
    console.log("countryyyyyyyyyy", this.state)
  }
  public test ="testing"
public edit:boolean=true;
public Religion = ['Hindu', 'Islam', 'Christianity', 'Sikhism', 'Buddhism', 'Jainism'];
public qualifications = ['10th Std', '12th Std', 'Undergraduate', 'Postgraduate', 'Not Applicable'];
editdata(data){
  this.edit=false;

}

  public memberData
  public selectedFile: File;
  public msg;

  public button = true;
  public mobiledd: any


  mobile_numberd(data) {
    this.mobiledd = data
    let mobss = { mobiless: data }
    console.log("mmmmm", mobss)
  }

  //////////////////////////// cibil_file upload and show////////////////////
  public cibilFileshow;
  public image;
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log('image', this.selectedFile);
    this.button = false;
  }


  cibilFile(memberData) {
    console.log("HHHHHHHHHHHHHHHHHHHHHH", memberData)
    this.regServ.Cibilfile2(memberData).subscribe(backResponse => {
      this.cibilFileshow = backResponse;
      this.image = this.cibilFileshow.image;
      console.log("response", backResponse, this.cibilFileshow.image)
    },
      error => console.log("erroorrrr", error)
    );
  }

  public objs: any;
  onUpload(data) {

    const uploadData = new FormData();
    uploadData.append('membercibil', this.selectedFile, this.selectedFile.name);
    console.log("Inside upload function", this.selectedFile, data, this.selectedFile.name)
    uploadData.append('idff', data)
    let image = uploadData
    let objs = {
      "im": uploadData,
      "idff": data
    }
    console.log("Print Object", uploadData)
    this.regServ.Cibilfile(uploadData)
      .subscribe(backfile => {
        console.log("backkkkkkkkkk", backfile);
        this.cibilFileshow = backfile;
        this.image = this.cibilFileshow.cibil_file;
      });

  }
  ///////////////////////////////////////////////////////////////////////////////////////

    /////////////////// Modal Function ///////////////////
  display = 'none';
  
  openModal(data) {
    this.display = 'block';
    this.image = data;
    
  }

  onCloseHandled() {
    this.display = 'none';
  }


  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.image);
  }


////////////////////////////////////////////////////////

membersave(data){
  console.log("data in compppppppppppppppp",data);

  this.regServ.appmem(data).subscribe(backdata =>{

  });
  this.edit=true;
}
NoClick(): void {
    this.dialogRef.close();
  }



  selectfile: File;

  public obj: any;
  public up: any;
  public button1=true;
  public button2=true;
  public button3=true;


  upload(event) {
    var id = localStorage.getItem('id');
    console.log("fffffff", id);
    this.selectfile = event.target.files[0];
    console.log("hhhhhhhh", this.selectfile); 
    this.button1=false;
  }

  gagreeUpload(){
    console.log("aaaaaaaaaaaaaaa:", this.selectfile);
    var id = localStorage.getItem('id');
    const upload = new FormData();
    upload.append('pic1', this.selectfile, this.selectfile.name)
    upload.append('id', id)
    upload.append('name', "pic1")
    this.regServ.uploadpic(upload).subscribe(data => {
    console.log("gfundcopy", data);
    })
}


  upload1(event) {
    var id = localStorage.getItem('id');
    console.log("hereee", id);
    this.selectfile = event.target.files[0];
    console.log("consoling...", this.selectfile);
    this.button2=false;
  }

  ragreeUpload(){
    console.log("aaaaaaaaaaaaaaa:", this.selectfile);
    var id = localStorage.getItem('id');
    const upload = new FormData();
    upload.append('pic1', this.selectfile, this.selectfile.name)
    upload.append('id', id)
    upload.append('name', "pic2")
    this.regServ.uploadpic1(upload).subscribe(data => {
      console.log("rtmcopy", data);
    })
  }

  upload2(event) {
    var id = localStorage.getItem('id');
    console.log("hereee", id);
    this.selectfile = event.target.files[0];
    console.log("consoling...", this.selectfile);
    this.button3=false;
  }
  
  adagreeUpload(){
    console.log("aaaaaaaaaaaaaaa:", this.selectfile);
    var id = localStorage.getItem('id');
    const upload = new FormData();
    upload.append('pic1', this.selectfile, this.selectfile.name)
    upload.append('id', id)
    upload.append('name', "pic3")
    this.regServ.uploadpic2(upload).subscribe(data => {
      console.log("additionalcopy", data);
    })
  }
}
