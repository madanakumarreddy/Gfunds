import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../Services/Memberservice/member.service';
import { RegistrationService } from '../../Services/registrationservice/registration.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-viewmemberprofile',
  templateUrl: './viewmemberprofile.component.html',
  styleUrls: ['./viewmemberprofile.component.css']
})
export class ViewmemberprofileComponent implements OnInit {

constructor( public memserv:MemberService, 
              private regService: RegistrationService,
              private router:Router) { }

public bankname = ["SBI", "Canara Bank", "Allahabad Bank", "Andhra Bank", "BOI",
        "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank", "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank",
        "Indian Bank", "Indian Overseas Bank", "Oriental Bank of Commerce", "Punjab & Sindh Bank", "Punjab National Bank", "Syndicate Bank", "UCO Bank", "Union Bank of India", "Vijaya Bank",
        "IDBI Bank", "Bharatiya Mahila Bank", "Axis Bank", "Deutsche Bank", "Dhanlaxmi Bank", "Federal Bank", "ICICI Bank", "Karnataka Bank Ltd", "ING Vysya Bank", "Kotak Bank", "Yes Bank Ltd", "Shamrao Vitthal Co-operative Bank", "Others"
    ];
private religion = ["Hinduism","Sikhism","Islam","Others"];
public banktype = ["Saving","Current","Salary"];
public addresstype = ["Rented", "Owned"]
public qualification = ['10th Std', '12th Std', 'Undergraduate', 'Postgraduate', 'Not Applicable'];
public stayduration = ['less than 1 year', '1 to 3 Years', '3 to 5 Years', 'More than 5 Years'];
public memberdetails:any = [{}];
public edit :any ;
public front_photo;
public editable:any = {};

  ngOnInit() {
    this.memberFile();
    this.memserv.viewprofile().subscribe(data => {
      console.log("back data", data);
      this.memberdetails = data['data'];
      console.log("Member detailsssss", this.memberdetails);

      this.countryList = this.regService.countryList1;
      this.permanentstates = this.regService.countryList1;
      this.count = this.memberdetails[0].state;
      this.count1 = this.memberdetails[0].permanent_state;
      this.changeCountry();
      this.changepermanentstate();
      console.log("countryyyyyyyyyy    this.AllcountriesList", this.countryList);
    });

  }


  savememberdetails(data) {
    
    console.log("Successfully memberdetails[0].marital_status saved",data[0].spouse_name);
    if ((this.memberdetails[0].marital_status == 'Unmarried')||(this.memberdetails[0].marital_status =='Spouse Deceased')){
      data[0].spouse_name ='';
      data[0].spouse_number = '';
      data[0].spouse_work ='';
      // data[0].dat_of_marriage = '';

    }

    console.log("Successfully details saved", data);
    this.memserv.memberviewedit(data).subscribe(data => {
      this.memserv.viewprofile().subscribe(data => {
        console.log("back to edit button", data);
        this.memberdetails = data['data'];
        console.log("Member details",this.memberdetails);
        this.memserv.updateProfilePic = "update";
        this.router.navigate(['memberhome']);
      });
    });

  }

  cancel() {
    this.memserv.viewprofile().subscribe(data => {
      console.log("back to edit button", data);
      this.memberdetails = data['data'];
      console.log("Member details", this.memberdetails);
    });

  }
  keyPressNO(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  count;
  public countryList: any;
  public cities: Array<any>;
  changeCountry() {
    console.log("rrrrrrrrrr", this.count)
    this.count = this.memberdetails[0].state;
    this.cities = this.countryList.find(con => con.name == this.count).cities;
  }
  permanentstates: any;
  permanentdistricts: any;
  count1;
  changepermanentstate() {
    console.log("rrrrrrrrrr", this.count)

    this.count1 = this.memberdetails[0].permanent_state;
    this.permanentdistricts = this.permanentstates.find(con => con.name == this.count1).cities;
  }


  public updatepic;
  selectphoto(event) {
    console.log("llllllll", event.target.files[0]);
    this.updatepic = event.target.files[0]
    console.log("ppppppppp", this.updatepic);
  }

  memberprofileimage() {
    const fd = new FormData();
    fd.append("pic", this.updatepic);
    this.memserv.updatepicture(fd).subscribe(data => {
      console.log(data);
    })





  }

  public pic1;
  public pic2;
  public pic3;

  memberFile() {
    this.regService.getmemfile().subscribe(backResponse => {
      console.log("responseeeeeeeeee", backResponse)
      this.pic1 = backResponse;
      console.log("responseeeeeeeeeee", backResponse)
    },
      error => console.log("erroorrrr", error)
    );
  }

  gfundfile = 'Gfund Copy';
  rtmfile = 'RTM Copy';
  additionalcopy = 'Additional Copy';

  /////////////////////////Modal Functions//////////////////////////////////////////

  display = 'none';
  public picData;
  openModal(data) {
    this.display = 'block';
    this.picData = data;
    console.log("Inside display", this.picData)
    this.gfundfile = 'Gfund Copy';
  }

  openModal1(data) {
    this.display = 'block';
    this.picData = data;
    this.gfundfile = 'RTM Copy';
  }
  openModal2(data) {
    this.display = 'block';
    this.picData = data;
    this.gfundfile = 'Additional Copy';
  }

  onCloseHandled() {
    this.display = 'none';
    this.regService.getmemfile().subscribe(backResponse => {
      this.pic1 = backResponse;
    },
      error => console.log("erroorrrr", error)
    );
  }


  transform() {
    return this.picData;
  }
  //////////////////////////////////////////////////////////////////////
}
