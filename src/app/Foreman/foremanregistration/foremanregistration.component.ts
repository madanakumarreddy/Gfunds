import { Component, OnInit,Inject,ElementRef, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import { RegistrationService } from '../../Services/registrationservice/registration.service';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { ForemanfileService } from '../../Services/foremanupload/foremanfile.service';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PincodeService } from '../../Services/pincode.service';
declare var $:any;



export interface Gender {
  value: any;
  viewValue: any;
}
export interface Merital {
  value: any;
  viewValue: any;
}
export interface Residence {
  value: any;
  viewValue: any;
}
export interface Register {
  value: any;
  viewValue: any;
}
export interface Ref {
  value: any;
  viewValue: any;
}
export interface Account {
  value: any;
  viewValue: any;
}


@Component({
  selector: 'app-foremanregistration',
  templateUrl: './foremanregistration.component.html',
  styleUrls: ['./foremanregistration.component.css']
})
export class ForemanregistrationComponent implements OnInit {


  PersonaldetailsFormGroup: FormGroup;
  BankdetailsFormGroup: FormGroup;
  ProfiledetailsFormGroup : FormGroup;
  MarriedFormGroup: FormGroup;
  UnmarriedFormGroup: FormGroup;
  OwnedResidenceFormGroup: FormGroup;
  RentedResidenceFormGroup: FormGroup;
  OdForemanFormGroup : FormGroup;
  CurrentForemanFormGroup : FormGroup;


@ViewChild('marriedForeman') marriedFor:ElementRef
@ViewChild('unmarriedForeman') unmarriedFor:ElementRef
@ViewChild('ResidenceForeman') ResFor:ElementRef
@ViewChild('accountTpeForeman') accTypeFor:ElementRef
@ViewChild('sussRegForeman') sussRegForeman:ElementRef



  constructor(private _formBuilder: FormBuilder, private foremanpinserv :PincodeService,
               private foremenservice: ForemanfileService,
               private router:Router ){ }


public gender : any;
public marital_status:any;
public present_address_type:any;
public isOptional = true;


Genders: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];

MeritialStatus : Merital [] = [
{ value : 'Married', viewValue : 'Married'},
{value : 'UnMarried', viewValue: 'UnMarried'}
];

ResidentialStatus : Residence [] = [
{value : 'Owned', viewValue : 'Owned'},
{value : 'Rented', viewValue : 'Rented'}
];

AccType : Account [] = [
{value : 'OD', viewValue : 'OD'},
{value : 'CURRENT', viewValue : 'CURRENT'}
];

References : Ref[] = [
{value : 'Reference', viewValue : 'Reference'},
{value : 'Print ADD', viewValue : 'Print ADD'},
{value : 'Electronic ADD', viewValue : 'Electronic ADD'},
{value : 'Social Media', viewValue : 'Social Media'},
{value : 'Google', viewValue : 'Google'},
{value : 'Others', viewValue : 'Others'}
];

RegisterCompany : Register[] = [
{value : 'true',  viewValue :'Registered'},
{value : 'false', viewValue : 'Non-Registered'}
];



  ngOnInit() {
    this.PersonaldetailsFormGroup = this._formBuilder.group({
      gender: ['', Validators.required],
      aadhaar_card: ['', [Validators.required,Validators.pattern("^[0-9]{12}$")]],
      applicant_pancard_number: ['', [Validators.required,Validators.pattern("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$")]],
      email_id: ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]],
      pin_code : ['',[Validators.required,Validators.pattern("^[0-9]{6}$")]],
      state: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      present_address_type: ['', Validators.required],
      marital_status: ['', Validators.required],
      spouse_name : [''],
      spouse_number : [''],
      dat_of_marriage : [''],
      spouse_work :[''],
      father_name : [''],

      house_number:[''],
      building_name:[''],
      street:[''],
      home_land_mark:[''],
      present_city:[''],
      present_district:[''],
      present_state:[''],



      // permanent_houseno : [''],
      // permanent_housename : [''],
      // permanent_street : [''],
      // permanent_landmark : [''],
      // permanent_city   : [''],
      // permanent_state : [''],
      // permanent_district : [''],
      // permanent_pincode : ['',],
      // rented_houseno : [''],
      // rented_buildingname : [''],
      // rented_street : [''],
      // rented_landmark : [''],
      // rented_pincode   : ['',],
      // rented_city : [''],
      // rented_state : [''],
      // rented_district : ['']
    
    });


    this.BankdetailsFormGroup = this._formBuilder.group({
      // bank1: ['',Validators.required],
      // ifsc_code: ['',Validators.required],
      account_type: ['',Validators.required],
      aboutgchit: ['',Validators.required],
      agree: ['',Validators.required],
      chit_company: ['',Validators.required],
      chit_company_address: ['',Validators.required],
      chit_company_landmark: ['',Validators.required],

      bank_name:[''],
      branch_name:[''],
      ifsc_code:[''],
      account_name:[''],
      account_number:[''],

      // od_bank_name : [''],
      // od_account_name : [''],
      // od_account_number : [''],
      // od_ifsc_code : [''],
      // od_branch_name : [''],
      // current_bank_name : [''],
      // current_account_name : [''],
      // current_account_number : [''],
      // current_ifsc_code : [''],
      // current_branch_name : ['']
      
    });
    this.ProfiledetailsFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });

    this.MarriedFormGroup = this._formBuilder.group({
      spouse_name : ['',Validators.required],
      spouse_number : ['',[Validators.required,,Validators.pattern("^[6-9][0-9]{9}$")]],
      dat_of_marriage :['',Validators.required],
      spouse_work : ['',Validators.required]
    });
    this.UnmarriedFormGroup = this._formBuilder.group({
      father_name : ['',Validators.required]
    });

    this.OwnedResidenceFormGroup = this._formBuilder.group({
      permanent_houseno : ['',Validators.required],
      permanent_housename : ['',Validators.required],
      permanent_street : ['',Validators.required],
      permanent_landmark : ['',Validators.required],
      permanent_city   : ['',Validators.required],
      permanent_state : ['',Validators.required],
      permanent_district : ['',Validators.required],
      permanent_pincode : ['',[Validators.required,Validators.pattern("^[0-9]{6}$")]]
    });

    this.RentedResidenceFormGroup = this._formBuilder.group({
      rented_houseno : ['',Validators.required],
      rented_buildingname : ['',Validators.required],
      rented_street : ['',Validators.required],
      rented_landmark : ['',Validators.required],
      rented_pincode   : ['',[Validators.required,Validators.pattern("^[0-9]{6}$")]],
      rented_city : ['',Validators.required],
      rented_state : ['',Validators.required],
      rented_district : ['',Validators.required]
    });

    this.OdForemanFormGroup = this._formBuilder.group({
      od_bank_name : ['',Validators.required],
      od_account_name : ['',Validators.required],
      od_account_number : ['',[Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(5)]],
      od_ifsc_code : ['',[Validators.required,Validators.pattern("^[A-Za-z]{4}[0-9]{7}$"), Validators.maxLength(11)]],
      od_branch_name : ['',Validators.required]
    });

    this.CurrentForemanFormGroup = this._formBuilder.group({
      current_bank_name : ['',Validators.required],
      current_account_name : ['',Validators.required],
      current_account_number : ['',[Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(5)]],
      current_ifsc_code : ['',[Validators.required,Validators.pattern("^[A-Za-z]{4}[0-9]{7}$")]],
      current_branch_name : ['',Validators.required]
    });
  }



  keyPressNumber(event:any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  keyPressNames(event: any) {
    const pattern = /[a-zA-Z\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

public marriageStatus :any;

MaritialStatusforeman(event){
    this.marriageStatus = event;
  if (this.marriageStatus == 'Married') {
    $(this.marriedFor.nativeElement).modal('show')
  }
  else{
    $(this.unmarriedFor.nativeElement).modal('show')
  }
}

public residentialStatus:any;

ResidentialStatusForeman(event){
  this.residentialStatus = event.value;
    $(this.ResFor.nativeElement).modal('show')
}

personalDetails(){

  console.log("*******************", this.PersonaldetailsFormGroup.value);
  $(this.sussRegForeman.nativeElement).modal('show')

}
bankDetails(){

}

marriedDataSave(){
    if(this.marriageStatus == 'Married'){
      $(this.marriedFor.nativeElement).modal('hide')
      this.PersonaldetailsFormGroup.patchValue({
        spouse_name : this.MarriedFormGroup.value['spouse_name'],
        spouse_number : this.MarriedFormGroup.value['spouse_number'],
        dat_of_marriage : this.MarriedFormGroup.value['dat_of_marriage'],
        spouse_work :this.MarriedFormGroup.value['spouse_work'],
        father_name : ''    
    });

  }
  else{
        $(this.unmarriedFor.nativeElement).modal('hide')
        this.PersonaldetailsFormGroup.patchValue({
          spouse_name : '',
          spouse_number : '',
          dat_of_marriage : '',
          spouse_work :'',
          father_name : this.UnmarriedFormGroup.value['father_name']    
    });
  }
console.log("Mariedddddddd",this.PersonaldetailsFormGroup.value);

}

cancelAllData(){
  if(this.marriageStatus == 'Married'){
      $(this.marriedFor.nativeElement).modal('hide')
      this.PersonaldetailsFormGroup.patchValue({
           marital_status : ''
    });

  }
  else{
        $(this.unmarriedFor.nativeElement).modal('hide')
        this.PersonaldetailsFormGroup.patchValue({
          marital_status : ''
    });
  }
}


residenceDataSave(){
  if (this.residentialStatus == 'Owned') {
    $(this.ResFor.nativeElement).modal('hide')
    this.PersonaldetailsFormGroup.patchValue({
      house_number : this.OwnedResidenceFormGroup.value['permanent_houseno'],
      building_name : this.OwnedResidenceFormGroup.value['permanent_housename'],
      street : this.OwnedResidenceFormGroup.value['permanent_street'],
      home_land_mark : this.OwnedResidenceFormGroup.value['permanent_landmark'],
      present_city   : this.OwnedResidenceFormGroup.value['permanent_city'],
      present_state : this.OwnedResidenceFormGroup.value['permanent_state'],
      present_district : this.OwnedResidenceFormGroup.value['permanent_district'],
      permanent_pincode : this.OwnedResidenceFormGroup.value['permanent_pincode'],
    });
  }
  else{
    $(this.ResFor.nativeElement).modal('hide')
    this.PersonaldetailsFormGroup.patchValue({
      house_number : this.RentedResidenceFormGroup.value['rented_houseno'],
      building_name : this.RentedResidenceFormGroup.value['rented_buildingname'],
      street : this.RentedResidenceFormGroup.value['rented_street'],
      home_land_mark : this.RentedResidenceFormGroup.value['rented_landmark'],
      rented_pincode   : this.RentedResidenceFormGroup.value['rented_pincode'],
      present_city : this.RentedResidenceFormGroup.value['rented_city'],
      present_state : this.RentedResidenceFormGroup.value['rented_state'],
      present_district : this.RentedResidenceFormGroup.value['rented_district']
    });
  }
  
  console.log("RESIDENTIALLLLL",this.PersonaldetailsFormGroup.value);
}


clearResidenceData(){
  if (this.residentialStatus == 'Owned') {
    $(this.ResFor.nativeElement).modal('hide')
    this.PersonaldetailsFormGroup.patchValue({
      present_address_type : ''
    });
  }
  else{
    $(this.ResFor.nativeElement).modal('hide')
    this.PersonaldetailsFormGroup.patchValue({
      present_address_type : ''
    });
  }
}


public accType:any;

accTypeForeman(event){
    this.accType = event;
    $(this.accTypeFor.nativeElement).modal('show')
}

accTypeDataSave(){
    $(this.accTypeFor.nativeElement).modal('hide')

    if(this.accType == 'OD'){
    this.BankdetailsFormGroup.patchValue({
      bank_name : this.OdForemanFormGroup.value['od_bank_name'],
      account_name : this.OdForemanFormGroup.value['od_account_name'],
      account_number : this.OdForemanFormGroup.value['od_account_number'],
      ifsc_code : this.OdForemanFormGroup.value['od_ifsc_code'],
      branch_name : this.OdForemanFormGroup.value['od_branch_name'],
    });

  }
  else{

    this.BankdetailsFormGroup.patchValue({
      bank_name : this.CurrentForemanFormGroup.value['current_bank_name'],
      account_name : this.CurrentForemanFormGroup.value['current_account_name'],
      account_number : this.CurrentForemanFormGroup.value['current_account_number'],
      ifsc_code : this.CurrentForemanFormGroup.value['current_ifsc_code'],
      branch_name : this.CurrentForemanFormGroup.value['current_branch_name'],
    });

  }
    console.log("BANKDETAILSSSSSSSSS",this.BankdetailsFormGroup.value);

}

clearAccountData(){
  if (this.accType == 'OD') {
    $(this.accTypeFor.nativeElement).modal('hide')
    this.BankdetailsFormGroup.patchValue({
      account_type : ''
    });
  }
  else{
    $(this.accTypeFor.nativeElement).modal('hide')
    this.BankdetailsFormGroup.patchValue({
      account_type : ''
    });
  }

}

public pinCities = [];
pincodeVerify(event){
  let pinVer = event.target.value;
  console.log("AAARUUUUUUUUUUU",pinVer);
  if (pinVer.length == 6) {
    // localStorage.clear();
    this.foremanpinserv.checkPin(pinVer).subscribe(result => {
      console.log("RESPONSEEEEEEEEEEE",result);
      var pinData = result;
      var cities = pinData[0]['PostOffice']
      if (pinData[0]['Status'] == 'Success') {
              console.log("pindataaaaaaa",pinData);
              this.PersonaldetailsFormGroup.patchValue({
                state : pinData[0]['PostOffice'][0]['State'], 
                district : pinData[0]['PostOffice'][0]['District'],     
                pinCity : pinData[0]['PostOffice']   

              });
                  cities.forEach(citynames =>{
                    this.pinCities.push(citynames.Name)
                  });
              
           }
           else{
             let errordata = "Please Enter A Valid Pincode"
           }

    });
  }

}

public succReturn;

foremanProfile(event){
  console.log("MY fileeeeeeeeeeeee",event);
let file = new FormData()
file.append("front_photo", event);
console.log("*******************", this.PersonaldetailsFormGroup.value);
let data1 = JSON.stringify(this.PersonaldetailsFormGroup.value)
let data2 = JSON.stringify(this.BankdetailsFormGroup.value);
console.log("&&&&&&&&&&&&&&&&&&&", data2);
file.append("data1",data1);
file.append("data2",data2);
this.foremenservice.foremandetails(file).subscribe(data =>{
  console.log("^^^^^^^^^", data);
  // $(this.sussRegForeman.nativeElement).modal('show')
  this.succReturn = data;
});
}

logoutForeman(){
  localStorage.clear();
   this.router.navigate(["/login"]);
     $(this.sussRegForeman.nativeElement).modal('hide')

}

navigate()
{
  $(this.sussRegForeman.nativeElement).modal('hide')
  this.router.navigate(["/foreman/upload"]);
}

}