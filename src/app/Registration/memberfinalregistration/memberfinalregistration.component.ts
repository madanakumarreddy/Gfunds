import { Component, OnInit, Inject,HostListener,Input,ElementRef,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationService } from '../../Services/registrationservice/registration.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';

declare var $: any;
export interface DialogData {

  name: string;
}

@Component({
  selector: 'app-memberfinalregistration',
  templateUrl: './memberfinalregistration.component.html',
  styleUrls: ['./memberfinalregistration.component.css'],
  
})

export class MemberfinalregistrationComponent implements OnInit {
  @ViewChild('maritalMarrie') maritalMarried: ElementRef;
  @ViewChild('Residentialpopup') Residential: ElementRef;
  @ViewChild('permenentaddresspopup') permenentaddress: ElementRef;
  @ViewChild('employmentPop') employmentPopup: ElementRef;
  @ViewChild('jobDetailsPop') jobDetailsPopup: ElementRef;
  @ViewChild('runningLoansTypePop') runningLoansTypePopup: ElementRef;
  @ViewChild('loanDetailsPop') loanDetailsPopup: ElementRef;
  
  
  
  public personalFormGroup: FormGroup;
  public professionalFormGroup: FormGroup;
  public otherFormGroup:FormGroup;
  public marriedFormGroup:FormGroup;
  public unmarriedFormGroup:FormGroup;
  public divorceeFormGroup:FormGroup;
  public ResidentialFormGroup:FormGroup;
  public permentAddressFormGroup:FormGroup;
  public employmentTypeFormGroup:FormGroup;
  public govPriJobFormGroup:FormGroup;
  public shopOwnerFormGroup:FormGroup;
  public smallBusinessFormGroup:FormGroup;
  public runningLoanTypeFormGroup:FormGroup;
  public loanDetailsFormGroup:FormGroup;

  
  
  public isOptional = true;
  constructor(private _formBuilder: FormBuilder,
              private regService: RegistrationService,
              private route: Router){

  }
  public genders: String[] = ['Male','Female'];
  public qualifications: String[] = ['10th Std','12th Std','Undergraduate','Postgraduate','Not Applicable'];
  public maritalstatuses: String[] = ['Married','Unmarried','Divorcee','Spouse Deceased'];
  public residentials: String[] = ['Owned','Rented'];
  public stayingHowlong: String[] = ['less than 1 year', '1 to 3 years', '3 to 5 years', 'More than 5 years'];
  public permanentAdds: String[] = ['Yes','No'];
  public properties:string[] = ['House','Apartment','Land','Others'];
  public incomeRange:string[] = ['0-2 L', '2-4 L', '4-6 L', '6-10 L', '10-15 L', '15-25 L', '25 L+'];
  public businessTypes:string[] = ['Public Limited', 'Private LTD', 'LLP or Partnership', 'Proprietary'];
  public industryTypes:string[] = ['Aviation', 'Banking and insurance', 'Beauty and Wellness', 'Chemical', 'Construction', 'Dairy', 'Engineering and Machinery', 'Entertainment', 'Fashion', 'Food and Beverage', 'Fitness and Sports', 'Hotels/Motels', 'Hardware', 'Iron and Steel', 'IT and Software services', 'Jewelery', 'Medical and Health care', 'Print media', 'Paper', 'Pharmacy', 'Real estate', 'Restaurant', 'Retail and wholesale trade', 'Retail and wholesale trade', 'Textile', 'Tobacco', 'Tourism', 'Others'];
  public numberOfStaff:string[] = ['0 to 5 Person','6 to 10 Person','11 to 20 Person','21 to 35 Person','36 to 50 Person','51 to 80 Person','81 to 120 Person','121+ Person'];
  
  public allBankName:string[] = ["SBI", "Canara Bank", "Allahabad Bank", "Andhra Bank", "BOI",
                                  "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank", "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank",
                                  "Indian Bank", "Indian Overseas Bank", "Oriental Bank of Commerce", "Punjab & Sindh Bank", "Punjab National Bank", "Syndicate Bank", "UCO Bank", "Union Bank of India", "Vijaya Bank",
                                  "IDBI Bank", "Bharatiya Mahila Bank", "Axis Bank", "Deutsche Bank", "Dhanlaxmi Bank", "Federal Bank", "ICICI Bank", "Karnataka Bank Ltd", "ING Vysya Bank", "Kotak Bank", "Yes Bank Ltd", "Shamrao Vitthal Co-operative Bank",
                                  'City Union Bank','Development Credit Bank','Induslnd Bank','Jammu And Kashmir Bank','Karur Vasya Bank','Lakshmi Vilas Bank','South India Bank','United Bank Of India','Standard Chartered Bank', "Others"
                                ];
  public aboutGchit = ['Reference', 'Print ADD', 'Electronic ADD', 'Social Media', 'Google', 'Others'];
  public preferredTime = ['10 AM to 12 Noon', '12 Noon to 2 PM', '3 PM to 5 PM'];

  
   

  ngOnInit()
  {
    

    this.personalFormGroup = this._formBuilder.group({
      gender: ['', Validators.required],
      aadhaar_card: ['', [Validators.required,Validators.pattern("^[0-9]{12}$")]],
      pancard_number: ['', [Validators.pattern("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$")]],
      email_id: ['',[Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]],
      qualification:['',Validators.required],   
      marital_status:['',Validators.required],
      present_address_type:['',Validators.required],
      pincode:['',[Validators.required,Validators.pattern("^[0-9]{6}$")]],
      state:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      district:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      city:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      staying_from:['',Validators.required],
      permanentaddr:['',Validators.required], //not saving    
      alternate_number:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      spouse_name: [''],
      spouse_number: [''],
      dat_of_marriage: null,
      spouse_work: [''],
      father_name: [''],
      seperated_since: [''],
      house_no:[''],
      building_name:[''],
      street:[''],
      landmark:[''],
      // permanent_address  not defined in ui
      permanent_houseno:[''],
      permanent_housename:[''],
      permanent_street:[''],
      permanent_landmark:[''],
      permanent_pincode:[''],
      permanent_city:[''],
      permanent_state:[''],
      permanent_district:['']
      // religion   not defined in ui
    });

    this.professionalFormGroup = this._formBuilder.group({
      profession:['',Validators.required],
      incometaxpayer:['',Validators.required],
      property:['',Validators.required],
      running_loans:['',Validators.required],
      selected_bank:['',Validators.required],
      // bankname:['',Validators.required],
      ifsc_code:['',[Validators.required,Validators.pattern("^[A-Za-z]{4}[0-9]{7}$")]],
      account_type:['',Validators.required],
      holder_name:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      account_number:['',[Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(5)]],
      branch_name: ['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      // are_you_in not defined in ui
      // job  not defined in ui
      type_of_job: [''],
      organization_name:[''],
      designation:[''],
      id_card_number :[''],
      modeof_salary :[''],
      shop_name:[''],
      shop_address:[''],
      contact_phone_number :[''],
      shop_6months_income :[''], //no field
      shop_avg_annual_income :[''], //no field
      branch_office :[''],
      busines_type:[''],
      busines_name:[''],
      industry_type :[''],
      busines_loc :[''],
      busines_landmark :[''],
      busines_state :[''],
      busines_district:[''],
      busines_city:[''],
      busines_pincode :0,
      no_of_employees :[''],
      year_of_estd :null,
      turn_over :0,
      small_busi_avg_annual_income :[''], // no field
      small_busi_monthly_income:[''], // no field
      // self_income     not defined in ui
      // bank_balance    not defined in ui
      partner_name:[''],
      din :0,
      company_pan :[''],
      // purpose_of_loan    // no field
      running_loans_type:[''], // no field      
      running_two_wheeler_loan:[''],
      two_wheeler_bank:[''],
      two_wheeler_emi: [''],
      two_wheeler_tenure:[''],
      two_wheeler_emi_left:[''],
      running_four_wheeler_loan:[''],
      four_wheeler_bank:[''],
      four_wheeler_emi:[''],
      four_wheeler_tenure:[''],
      four_wheeler_emi_left:[''],
      running_personal_loan:[''],
      personal_bank:[''],
      personal_emi:[''],
      personal_tenure:[''],
      personal_emi_left:[''],
      running_home_loan:[''],
      home_bank:[''],
      home_emi:[''],
      home_tenure:[''],
      home_emi_left:[''],
      any_other_loan:[''],
      other_bank:[''],
      loan_name:[''],
      other_emi:[''],
      other_tenure:[''],
      other_emi_left:[''],
    
    });

    this.otherFormGroup = this._formBuilder.group({
      smart_phone:['',Validators.required],
      nominee_name:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      nominee_age:['',[Validators.required,Validators.pattern("^[0-9]{2}$")]],
      nominee_relationship:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      introduceby:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      refname1:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      refphone_number1:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      refname2:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      refphone_number2:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      about_gchits: ['',Validators.required],
      time_to_contact:['',Validators.required],
      front_photo:['',Validators.required],

    });

    this.marriedFormGroup = this._formBuilder.group({
      spouse_name: ['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      spouse_number: ['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      dat_of_marriage: ['',Validators.required],
      spouse_work: ['',Validators.required],

    });

    this.unmarriedFormGroup = this._formBuilder.group({
      father_name: ['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]]
    });

    this.divorceeFormGroup = this._formBuilder.group({
      seperated_since: ['',Validators.required]
    })

    
    this.ResidentialFormGroup = this._formBuilder.group({
      house_no:['',Validators.required],
      building_name:['',Validators.required],
      street:['',Validators.required],
      landmark:['',Validators.required]
    })

    this.permentAddressFormGroup=this._formBuilder.group({
      permanent_houseno:['',Validators.required],
      permanent_housename:['',Validators.required],
      permanent_street:['',Validators.required],
      permanent_landmark:['',Validators.required],
      permanent_pincode:['',[Validators.required,Validators.pattern("^[0-9]{6}$")]],
      permanent_city:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      permanent_state:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      permanent_district:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]]
    });

    this.employmentTypeFormGroup = this._formBuilder.group({
      type_of_job:['',Validators.required]

    });
    this.govPriJobFormGroup=this._formBuilder.group({
      organization_name:['',Validators.required],
      designation:['',Validators.required],
      id_card_number :['',Validators.required],
      modeof_salary :['',Validators.required],
      
    });
    this.shopOwnerFormGroup=this._formBuilder.group({
      shop_name:['',Validators.required],
      shop_address:['',Validators.required],
      shop_contact_number :['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      shop_6months_income :['',Validators.required],
      shop_avg_annual_income :['',Validators.required],
      shop_any_branch :['',Validators.required],
      
    });

    this.smallBusinessFormGroup=this._formBuilder.group({
      busines_type:['',Validators.required],
      busines_name:['',Validators.required],
      industry_type :['',Validators.required],
      busines_loc :['',Validators.required],
      busines_landmark :['',Validators.required],
      busines_state :['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      busines_district:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      busines_city:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      busines_pincode :['',[Validators.required,Validators.pattern("^[0-9]{6}$")]],
      no_of_employees :['',Validators.required],
      year_of_estd :['',Validators.required],
      turn_over :['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      small_busi_avg_annual_income :['',Validators.required],
      small_busi_monthly_income:['',Validators.required],
      partner_name:['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      din :['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      company_pan :['',[Validators.required,Validators.pattern("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$")]],
    });
    
    this.runningLoanTypeFormGroup = this._formBuilder.group({
      running_loans_type :['',Validators.required],
    });  

    this.loanDetailsFormGroup = this._formBuilder.group({
      loan_bank_name :['',Validators.required],
      loan_monthly_emi  :['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      loan_tenure :['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      loan_emi_left :['',[Validators.required,Validators.pattern("^[0-9]*$")]],

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


  public mariState;
  maritalStatusPop(event){
    this.mariState = event.value;
    if (this.mariState != 'Spouse Deceased'){
      $(this.maritalMarried.nativeElement).modal('show');
    }

  }

  maritalPopupData(){
    $(this.maritalMarried.nativeElement).modal('hide');
    if (this.mariState == 'Married'){
      console.log("poppppppdataaaaa",this.marriedFormGroup)
      this.personalFormGroup.patchValue({
        spouse_name: this.marriedFormGroup.value['spouse_name'],
        spouse_number: this.marriedFormGroup.value['spouse_number'],
        dat_of_marriage: this.marriedFormGroup.value['dat_of_marriage'],
        spouse_work: this.marriedFormGroup.value['spouse_work'],
        father_name: '',
        seperated_since: ''
      })
    }else if(this.mariState == 'Unmarried'){
      this.personalFormGroup.patchValue({
        spouse_name: '',
        spouse_number: '',
        dat_of_marriage: null,
        spouse_work: '',
        father_name: this.unmarriedFormGroup.value['father_name'],
        seperated_since: ''
      })

    }else if(this.mariState == 'Divorcee'){
      this.personalFormGroup.patchValue({
        spouse_name: '',
        spouse_number: '',
        dat_of_marriage: null,
        spouse_work: '',
        father_name: '',
        seperated_since: this.divorceeFormGroup.value['seperated_since']
      })
    }

  }

  maritalClosePopup(){
    $(this.maritalMarried.nativeElement).modal('hide');
    this.personalFormGroup.patchValue({
      marital_status:''
    })
  }


  residentialPopUp($event){
    this.ResidentialFormGroup.reset()
    this.personalFormGroup.patchValue({
      permanentaddr:''
    })
    $(this.Residential.nativeElement).modal('show');
  }
  residentialPopupData(){
    $(this.Residential.nativeElement).modal('hide');
      console.log("poppppppdataaaaakjdfkjfd",this.ResidentialFormGroup)
      this.personalFormGroup.patchValue({
      house_no:this.ResidentialFormGroup.value['house_no'],
      building_name:this.ResidentialFormGroup.value['building_name'],
      street:this.ResidentialFormGroup.value['street'],
      landmark:this.ResidentialFormGroup.value['landmark']
      })
  }
  residentialClosePopup(){
    $(this.Residential.nativeElement).modal('hide');
    this.personalFormGroup.patchValue({
      present_address_type:''
    })
  }
  PermanentAddressPopUp(event){

    if(event.value == "No"){
      $(this.permenentaddress.nativeElement).modal('show');
    
    } else{
      this.personalFormGroup.patchValue({
        permanent_houseno:this.ResidentialFormGroup.value['house_no'],
        permanent_housename:this.ResidentialFormGroup.value['building_name'],
        permanent_street:this.ResidentialFormGroup.value['street'],
        permanent_landmark:this.ResidentialFormGroup.value['landmark'],
        permanent_pincode:this.personalFormGroup.value['pincode'],
        permanent_city:this.personalFormGroup.value['city'],
        permanent_state:this.personalFormGroup.value['state'],
        permanent_district:this.personalFormGroup.value['district']
      })
    }   
  }
  permentAddressPopupData(){
    $(this.permenentaddress.nativeElement).modal('hide');
    this.personalFormGroup.patchValue({
      permanent_houseno:this.permentAddressFormGroup['permanent_houseno'],
      permanent_housename:this.permentAddressFormGroup['permanent_housename'],
      permanent_street:this.permentAddressFormGroup['permanent_street'],
      permanent_landmark:this.permentAddressFormGroup['permanent_landmark'],
      permanent_city:this.permentAddressFormGroup['permanent_city'],
      permanent_state:this.permentAddressFormGroup['permanent_state'],
      permanent_district:this.permentAddressFormGroup['permanent_district']
    })
  }
  permentAddressClosePopup(){
    $(this.permenentaddress.nativeElement).modal('hide');
    this.personalFormGroup.patchValue({
      permanentaddr:''
    })
  }
  
  public empType;
  employmentTypePop(event){
    this.empType = event.value
    this.professionalFormGroup.patchValue({   
      organization_name:'',
      designation:'',
      id_card_number :'',
      modeof_salary :'',
      shop_name:'',
      shop_address:'',
      shop_contact_number :'',
      shop_6months_income :'',
      shop_avg_annual_income :'',
      shop_any_branch :'',
      busines_type:'',
      busines_name:'',
      industry_type :'',
      busines_loc :'',
      busines_landmark :'',
      busines_state :'',
      busines_district:'',
      busines_city:'',
      busines_pincode :0,
      no_of_employees :'',
      year_of_estd :null,
      turn_over :0,
      small_busi_avg_annual_income :'',
      small_busi_monthly_income:'',
      partner_name:'',
      din :0,
      company_pan :'',
    
    });
    if(this.empType != 'Farmer'){
      $(this.employmentPopup.nativeElement).modal('show');
      
    }

  }

  employmentPopupClose(){
    
    $(this.employmentPopup.nativeElement).modal('hide');
    this.professionalFormGroup.patchValue({
      profession: ''
    })
  }
  public typeOfJobVar;
  employmentPopupData(){
    $(this.employmentPopup.nativeElement).modal('hide');
    this.typeOfJobVar = this.employmentTypeFormGroup.value['type_of_job']
    this.professionalFormGroup.patchValue({
      type_of_job: this.typeOfJobVar
    });
    this.govPriJobFormGroup.reset();
    $(this.jobDetailsPopup.nativeElement).modal('show');    
  }

  jobDetailsPopupClose(){
    this.professionalFormGroup.patchValue({
      profession: ''
    })
    $(this.jobDetailsPopup.nativeElement).modal('hide');
  }

  jobDetailsPopupData(){
    $(this.jobDetailsPopup.nativeElement).modal('hide');
    
    if((this.typeOfJobVar == 'Government Job') ||(this.typeOfJobVar == 'Private Job')){
      this.professionalFormGroup.patchValue({
        organization_name:this.govPriJobFormGroup.value['organization_name'],
        designation:this.govPriJobFormGroup.value['designation'],
        id_card_number :this.govPriJobFormGroup.value['id_card_number'],
        modeof_salary :this.govPriJobFormGroup.value['modeof_salary'],        
        shop_name:'',
        shop_address:'',
        shop_contact_number :'',
        shop_6months_income :'',
        shop_avg_annual_income :'',
        shop_any_branch :'',
        busines_type:'',
        busines_name:'',
        industry_type :'',
        busines_loc :'',
        busines_landmark :'',
        busines_state :'',
        busines_district:'',
        busines_city:'',
        busines_pincode :0,
        no_of_employees :'',
        year_of_estd :null,
        turn_over :0,
        small_busi_avg_annual_income :'',
        small_busi_monthly_income:'',
        partner_name:'',
        din :0,
        company_pan :'',
        
      });
    }else if(this.typeOfJobVar == 'Shop Owner'){

      this.professionalFormGroup.patchValue({
       
        shop_name:this.shopOwnerFormGroup.value['shop_name'],
        shop_address:this.shopOwnerFormGroup.value['shop_address'],
        shop_contact_number :this.shopOwnerFormGroup.value['shop_contact_number'],
        shop_6months_income :this.shopOwnerFormGroup.value['shop_6months_income'],
        shop_avg_annual_income :this.shopOwnerFormGroup.value['shop_avg_annual_income'],
        shop_any_branch :this.shopOwnerFormGroup.value['shop_any_branch'],
        organization_name:'',
        designation:'',
        id_card_number :'',
        modeof_salary :'',
        busines_type:'',
        busines_name:'',
        industry_type :'',
        busines_loc :'',
        busines_landmark :'',
        busines_state :'',
        busines_district:'',
        busines_city:'',
        busines_pincode :0,
        no_of_employees :'',
        year_of_estd :null,
        turn_over :0,
        small_busi_avg_annual_income :'',
        small_busi_monthly_income:'',
        partner_name:'',
        din :0,
        company_pan :'',
      });
    }else if(this.typeOfJobVar == 'Small Business'){
      this.professionalFormGroup.patchValue({
        
        busines_type:this.smallBusinessFormGroup.value['busines_type'],
        busines_name:this.smallBusinessFormGroup.value['busines_name'],
        industry_type :this.smallBusinessFormGroup.value['industry_type'],
        busines_loc :this.smallBusinessFormGroup.value['busines_loc'],
        busines_landmark :this.smallBusinessFormGroup.value['busines_landmark'],
        busines_state :this.smallBusinessFormGroup.value['busines_state'],
        busines_district:this.smallBusinessFormGroup.value['busines_district'],
        busines_city:this.smallBusinessFormGroup.value['busines_city'],
        busines_pincode :this.smallBusinessFormGroup.value['busines_pincode'],
        no_of_employees :this.smallBusinessFormGroup.value['no_of_employees'],
        year_of_estd :this.smallBusinessFormGroup.value['year_of_estd'],
        turn_over :this.smallBusinessFormGroup.value['turn_over'],
        small_busi_avg_annual_income :this.smallBusinessFormGroup.value['small_busi_avg_annual_income'],
        small_busi_monthly_income:this.smallBusinessFormGroup.value['small_busi_monthly_income'],
        partner_name:this.smallBusinessFormGroup.value['partner_name'],
        din :this.smallBusinessFormGroup.value['din'],
        company_pan :this.smallBusinessFormGroup.value['company_pan'],
        organization_name:'',
        designation:'',
        id_card_number :'',
        modeof_salary :'',
        shop_name:'',
        shop_address:'',
        shop_contact_number :'',
        shop_6months_income :'',
        shop_avg_annual_income :'',
        shop_any_branch :'',        
      });
    }

  }

  public runningLoanStatus;
  runnigLoansPop(event){
    this.runningLoanTypeFormGroup.reset();
    this.runningLoanStatus = event.value;
    if(this.runningLoanStatus == 'yes'){
      $(this.runningLoansTypePopup.nativeElement).modal('show');
    }else{
      this.professionalFormGroup.patchValue({
        running_two_wheeler_loan:'',
        two_wheeler_bank:'',
        two_wheeler_emi: '',
        two_wheeler_tenure:'',
        two_wheeler_emi_left:'',
        running_four_wheeler_loan:'',
        four_wheeler_bank:'',
        four_wheeler_emi:'',
        four_wheeler_tenure:'',
        four_wheeler_emi_left:'',
        running_personal_loan:'',
        personal_bank:'',
        personal_emi:'',
        personal_tenure:'',
        personal_emi_left:'',
        running_home_loan:'',
        home_bank:'',
        home_emi:'',
        home_tenure:'',
        home_emi_left:'',
        any_other_loan:'',
        other_bank:'',
        loan_name:'',
        other_emi:'',
        other_tenure:'',
        other_emi_left:'',        
      });
    }

  }


  public runLoanType;
  runningLoansTypePopData(){
    this.runLoanType = this.runningLoanTypeFormGroup.value['running_loans_type'];
    this.loanDetailsFormGroup.reset()
    $(this.runningLoansTypePopup.nativeElement).modal('hide');
    
    this.professionalFormGroup.patchValue({
      running_loans_type:this.runLoanType
    });
    $(this.loanDetailsPopup.nativeElement).modal('show');

  }
  

  runningLoansTypePopClose(){
    this.runningLoanTypeFormGroup.reset();
    $(this.runningLoansTypePopup.nativeElement).modal('hide');
    this.professionalFormGroup.patchValue({
      running_loans:'',
      running_loans_type: ''
    });

  }
  

  loanDetailsPopData(){
    $(this.loanDetailsPopup.nativeElement).modal('hide');

    if (this.runLoanType == '2 Wheeler Loan'){
      this.professionalFormGroup.patchValue({
        running_two_wheeler_loan:'Yes',
        two_wheeler_bank:this.loanDetailsFormGroup.value['loan_bank_name'],
        two_wheeler_emi: this.loanDetailsFormGroup.value['loan_monthly_emi'],
        two_wheeler_tenure:this.loanDetailsFormGroup.value['loan_tenure'],
        two_wheeler_emi_left:this.loanDetailsFormGroup.value['loan_emi_left'],
        running_four_wheeler_loan:'',
        four_wheeler_bank:'',
        four_wheeler_emi:'',
        four_wheeler_tenure:'',
        four_wheeler_emi_left:'',
        running_personal_loan:'',
        personal_bank:'',
        personal_emi:'',
        personal_tenure:'',
        personal_emi_left:'',
        running_home_loan:'',
        home_bank:'',
        home_emi:'',
        home_tenure:'',
        home_emi_left:'',
        any_other_loan:'',
        other_bank:'',
        loan_name:'',
        other_emi:'',
        other_tenure:'',
        other_emi_left:'',        
      });
    }else if(this.runLoanType == '4 Wheeler Loan'){
      this.professionalFormGroup.patchValue({
        running_two_wheeler_loan:'',
        two_wheeler_bank:'',
        two_wheeler_emi: '',
        two_wheeler_tenure:'',
        two_wheeler_emi_left:'',
        running_four_wheeler_loan:'Yes',
        four_wheeler_bank:this.loanDetailsFormGroup.value['loan_bank_name'],
        four_wheeler_emi:this.loanDetailsFormGroup.value['loan_monthly_emi'],
        four_wheeler_tenure:this.loanDetailsFormGroup.value['loan_tenure'],
        four_wheeler_emi_left:this.loanDetailsFormGroup.value['loan_emi_left'],
        running_personal_loan:'',
        personal_bank:'',
        personal_emi:'',
        personal_tenure:'',
        personal_emi_left:'',
        running_home_loan:'',
        home_bank:'',
        home_emi:'',
        home_tenure:'',
        home_emi_left:'',
        any_other_loan:'',
        other_bank:'',
        loan_name:'',
        other_emi:'',
        other_tenure:'',
        other_emi_left:'',    
      });
    }else if(this.runLoanType == 'Personal / Credit card Loan'){
      this.professionalFormGroup.patchValue({
        running_two_wheeler_loan:'',
        two_wheeler_bank:'',
        two_wheeler_emi: '',
        two_wheeler_tenure:'',
        two_wheeler_emi_left:'',
        running_four_wheeler_loan:'',
        four_wheeler_bank:'',
        four_wheeler_emi:'',
        four_wheeler_tenure:'',
        four_wheeler_emi_left:'',
        running_personal_loan:'Yes',
        personal_bank:this.loanDetailsFormGroup.value['loan_bank_name'],
        personal_emi:this.loanDetailsFormGroup.value['loan_monthly_emi'],
        personal_tenure:this.loanDetailsFormGroup.value['loan_tenure'],
        personal_emi_left:this.loanDetailsFormGroup.value['loan_emi_left'],
        running_home_loan:'',
        home_bank:'',
        home_emi:'',
        home_tenure:'',
        home_emi_left:'',
        any_other_loan:'',
        other_bank:'',
        loan_name:'',
        other_emi:'',
        other_tenure:'',
        other_emi_left:'',   
      });
    }else if(this.runLoanType == 'Home Loan'){
      this.professionalFormGroup.patchValue({
        running_two_wheeler_loan:'',
        two_wheeler_bank:'',
        two_wheeler_emi: '',
        two_wheeler_tenure:'',
        two_wheeler_emi_left:'',
        running_four_wheeler_loan:'',
        four_wheeler_bank:'',
        four_wheeler_emi:'',
        four_wheeler_tenure:'',
        four_wheeler_emi_left:'',
        running_personal_loan:'',
        personal_bank:'',
        personal_emi:'',
        personal_tenure:'',
        personal_emi_left:'',
        running_home_loan:'Yes',
        home_bank:this.loanDetailsFormGroup.value['loan_bank_name'],
        home_emi:this.loanDetailsFormGroup.value['loan_monthly_emi'],
        home_tenure:this.loanDetailsFormGroup.value['loan_tenure'],
        home_emi_left:this.loanDetailsFormGroup.value['loan_emi_left'],
        any_other_loan:'',
        other_bank:'',
        loan_name:'',
        other_emi:'',
        other_tenure:'',
        other_emi_left:'',    
      });
    }else if(this.runLoanType == 'Other Loan'){
      this.professionalFormGroup.patchValue({
        running_two_wheeler_loan:'',
        two_wheeler_bank:'',
        two_wheeler_emi: '',
        two_wheeler_tenure:'',
        two_wheeler_emi_left:'',
        running_four_wheeler_loan:'',
        four_wheeler_bank:'',
        four_wheeler_emi:'',
        four_wheeler_tenure:'',
        four_wheeler_emi_left:'',
        running_personal_loan:'',
        personal_bank:'',
        personal_emi:'',
        personal_tenure:'',
        personal_emi_left:'',
        running_home_loan:'',
        home_bank:'',
        home_emi:'',
        home_tenure:'',
        home_emi_left:'',
        any_other_loan:'Yes',
        other_bank:this.loanDetailsFormGroup.value['loan_bank_name'],
        loan_name:'',
        other_emi:this.loanDetailsFormGroup.value['loan_monthly_emi'],
        other_tenure:this.loanDetailsFormGroup.value['loan_tenure'],
        other_emi_left:this.loanDetailsFormGroup.value['loan_emi_left'],   
      });
    }
    

  }

  loanDetailsPopClose(){
    $(this.loanDetailsPopup.nativeElement).modal('hide');
    this.professionalFormGroup.patchValue({
      running_loans:'',
      running_loans_type: '',
    });
    this.runningLoanTypeFormGroup.reset();
    this.loanDetailsFormGroup.reset();

  }
  public allMemberDataForm = new FormData();
  memProfilePic(event){
    if(this.allMemberDataForm.has('profile')){
      this.allMemberDataForm.delete('profile');
      this.allMemberDataForm.append('profile',event.target.files[0]);
    } else{
      this.allMemberDataForm.append('profile',event.target.files[0]);
    }
  }
  finalDataSubmit(){
    console.log("this.personalFormGroup this.personalFormGroup",this.personalFormGroup.value);
    console.log("this.professionalFormGroup this.professionalFormGroup",this.professionalFormGroup.value);
    console.log("this.otherFormGroup this.otherFormGroup",this.otherFormGroup.value);
    let allObj = {...this.personalFormGroup.value,...this.professionalFormGroup.value,...this.otherFormGroup.value};
    console.log("allObj allObj allObj allObj",allObj);
    let userData = JSON.stringify(allObj);
    this.allMemberDataForm.append('user',userData);
    this.regService.Memberfinalreg(this.allMemberDataForm).subscribe(data =>{
      console.log("responseee fdsfdf",data);
      this.route.navigate(['/dashboard/memberupload']);
      
    })
  }
}

// loan_bank_name :[''],
//       loan_monthly_emi :[''],
//       loan_tenure :[''],
//       loan_emi_left :[''],

// public loanDetailsFormGroup:FormGroup;
//   @ViewChild('loanDetailsPop') loanDetailsPopup: ElementRef;

  

// @Component({
//   selector: 'memberfinalregistration-example',
//   templateUrl: 'memberfinalregistration-example.html',
// })
// export class memberfinalregistrationExample {

// keyPress1(event: any) {
//     const pattern = /[a-zA-Z\ ]/;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }

//   keyPress12(event: any) {
//     const pattern = /^[0-9]*$/;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }


//   constructor(
//     public dialogRef: MatDialogRef<memberfinalregistrationExample>) {}

//     public user:any={};


//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }

// @Component({
//   selector: 'unmaried',
//   templateUrl: 'unmaried.html',
// })
// export class unmaried {
//      fatherinformationform: FormGroup;
//     submitted = false;
//     constructor(private formBuilder: FormBuilder,
//     public dialogRef: MatDialogRef<unmaried>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,
//     public regservice:RegistrationService) {}
//     public user:any={};
//   ngOnInit() {
//         this.fatherinformationform = this.formBuilder.group({
//             fatherName: ['', Validators.required],

//         });
//     }
//     keyPress1(event: any) {
//     const pattern = /[a-zA-Z\ ]/;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }

//     // convenience getter for easy access to form fields
//    get f() { return this.fatherinformationform.controls; }

//     onSubmit(fatherName) {
//         this.submitted = true;

// if(fatherName){
//     this.dialogRef.close();
//     console.log(fatherName);
//     // this.regservice.MaritalStatus(fatherName);
// }

//         // stop here if form is invalid
//         if (this.fatherinformationform.invalid) {
//             return;
//         }
//     }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }

// //unmarreid popup end above....
// @Component({
//   selector: 'divorce',
//   templateUrl: 'divorce.html',
// })
// export class divorce {
//     public user:any={};
//   constructor(
//     public dialogRef: MatDialogRef<divorce>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }

// @Component({
//   selector: 'nomineesname',
//   templateUrl: 'nomineesname.html',
// })
// export class nomineesname {

//   keyPressName(event: any) {
//     const pattern = /[a-zA-Z\ ]/ ;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }

// public user:any={};

//   constructor(
//     public dialogRef: MatDialogRef<nomineesname>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }

// @Component({
//   selector: 'nomineesage',
//   templateUrl: 'nomineesage.html',
// })
// export class nomineesage {
//  public user:any={};
//  keyPressAge(event: any) {
//     const pattern = /^[0-9]*$/;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }
//   constructor(
//     public dialogRef: MatDialogRef<nomineesage>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }

// @Component({
//   selector: 'nomineesrelation',
//   templateUrl: 'nomineesrelation.html',
// })
// export class nomineesrelation {
//   keyPressRel(event: any) {
//     const pattern = /[a-zA-Z\ ]/ ;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }

// public user:any={};
//   constructor(
//     public dialogRef: MatDialogRef<nomineesrelation>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }

// /* Code for residential status */
// @Component({
//   selector: 'residential_status',
//   templateUrl: 'residential_status.html',
// })
// export class residential_status {
//   keyPressAddress(event: any) {
//     const pattern = /^[a-zA-Z\ \0-9\#\@\&]*$/;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }
  
//   keyPressBuilding(event: any) {
//     const pattern = /[a-zA-Z\ ]/ ;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }
//   keyPressLand(event: any) {
//     const pattern = /[a-zA-Z\ ]/ ;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }

// public user:any={};
//   constructor(
//     public dialogRef: MatDialogRef<residential_status>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }

// @Component({
//   selector: 'residential_status1',
//   templateUrl: 'residential_status1.html',
// })
// export class residential_status1 {
  
//   keyPressAddress(event: any) {
//     const pattern = /^[a-zA-Z\ \0-9\#\@\&]*$/;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }
  
//   keyPressBuilding(event: any) {
//     const pattern = /[a-zA-Z\ ]/ ;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }
//   keyPressLand(event: any) {
//     const pattern = /[a-zA-Z\ ]/ ;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }

// public user:any={};
//   constructor(
//     public dialogRef: MatDialogRef<residential_status>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }

// @Component({
//   selector: 'governmentjob',
//   templateUrl: 'governmentjob.html',
// })
// export class governmentjob {
// public user:any={};

// keyPress(event: any) {
//     const pattern = /[a-zA-Z\ ]/;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }
//   constructor(
//     public dialogRef: MatDialogRef<governmentjob>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
//       designationsss = ["CGHS", "EPFO" ];

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }



// @Component({
//   selector: 'SmallBusiness',
//   templateUrl: 'SmallBusiness.html',
// })


// export class SmallBusiness  {
//     public user:any={};
   
//     public countryList:any;
//     public tickmark;
//     public ittickmark;
//     public ifscList;


//     ngOnInit()
// {
//     this.countryList = this.regService.countryList1
//     console.log("countryyyyyyyyyy    this.AllcountriesList", this.countryList);
//     this.ifscList = this.regService.ifscList1
//     console.log("ifsc code", this.ifscList);
// }


//  cities: Array<any>;
//   changeCountry(count) {
//     this.cities = this.countryList.find(con => con.name == count).cities;
//   }


// keyPress1(event: any) {
//     const pattern = /^[0-9\#\@\&]*$/;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }
// keyPress2(event: any) {
//     const pattern = /[0-9]/;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }  
// keyPress(event: any) {
//     const pattern = /[a-zA-Z\ ]/;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }


//   constructor(private regService: RegistrationService,
//     public dialogRef: MatDialogRef<SmallBusiness>,
//     @Inject(MAT_DIALOG_DATA) public data: any,private regServ:RegistrationService) {}
//    professionsalaried1 = ['Teacher', 'Lawyer', 'Police', 'Salesman', 'Engineer', 'Labourer', 'Bussiness', 'Call center', 'chef', 'fashion designer',
//         'Beautician', 'Hotel Management', 'Doctor', 'Company Representative', 'Others'
//     ];
//    businesstype = ['Public Limited', 'Private LTD', 'LLP or Partnership', 'Proprietary'];
//  industrytype = ['Aviation', 'Banking and insurance', 'Beauty and Wellness', 'Chemical', 'Construction', 'Dairy', 'Engineering and Machinery', 'Entertainment', 'Fashion', 'Food and Beverage', 'Fitness and Sports', 'Hotels/Motels', 'Hardware', 'Iron and Steel', 'IT and Software services', 'Jewelery', 'Medical and Health care', 'Print media', 'Paper', 'Pharmacy', 'Real estate', 'Restaurant', 'Retail and wholesale trade', 'Retail and wholesale trade', 'Textile', 'Tobacco', 'Tourism', 'Others'];
//    NoOfStaff = ['0 to 5 Person','6 to 10 Person','11 to 20 Person','21 to 35 Person','36 to 50 Person','51 to 80 Person','81 to 120 Person','121+ Person']
//   AnnualIncome = ['0-2L','2-5L','5-10L','10-25L','25l+'];
//    MonthlyIncome = ['0-2L','2-4L','4-6L','6-10L','10-15L','15-25L','25L+']

//   onNoClick(): void {
//     this.dialogRef.close();
//   }


// }

// @Component({
//   selector: 'salariedemployee',
//   templateUrl: 'salariedemployee.html',
// })
// export class salariedemployee {
//     public user:any={};
//     public profession;
//     keyPress(event: any) {
//     const pattern = /[a-zA-Z\ ]/;

//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }

//   constructor(
//     public dialogRef: MatDialogRef<salariedemployee>,
//     @Inject(MAT_DIALOG_DATA) public data: any) {
//     // let ppp=this.professionsalaried1;

//   }
//    designationsss = ["CGHS", "EPFO" ];

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }






// @Component({
//   selector: 'personalloan',
//   templateUrl: 'personalloan.html',
// })
// export class Personalloan {
//     public user:any={};

//   constructor(
//     public dialogRef: MatDialogRef<residential_status>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,public dialog: MatDialog,
//     private regServ:RegistrationService) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

//   loan9(){
//     this.dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.loan10()
//     })
//   }
//   loan10(): void{
//     const dialogRef = this.dialog.open(Personalbankdetails, {
//       width: '750px',


//     })


//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed',result);
//       this.regServ.userpersonalloanData = result;
//       // this.name = result;
//     });
//   }
//   loan11(){
//     this.dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.loan12()
//     })
//   }
//   loan12(): void{
//     const dialogRef = this.dialog.open(Homeloan, {
//       width: '750px',


//     })


//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       // this.name = result;
//     });
//   }
// }

// @Component({
//   selector: 'homeloan',
//   templateUrl: 'homeloan.html',
// })
// export class Homeloan {
// public user:any={};
//   constructor(
//     public dialogRef: MatDialogRef<residential_status>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,public dialog: MatDialog,
//      private regServ:RegistrationService) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
//   loan13(){
//     this.dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.loan14()
//     })
//   }
//   loan14(): void{
//     const dialogRef = this.dialog.open(Homeloanbankdetails, {
//       width: '750px',


//     })


//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed',result);
//       this.regServ.userhomeloanData = result;

//       // this.name = result;
//     });
//   }
//   loan15(){
//     this.dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.loan16()
//     })
//   }
//   loan16(): void{
//     const dialogRef = this.dialog.open(Anyother, {
//       width: '750px',


//     })


//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       // this.name = result;
//     });
//   }

// }

// @Component({
//   selector: 'anyotrher',
//   templateUrl: 'anyother.html',
// })
// export class Anyother {
// public user:any={};


//   constructor(
//     public dialogRef: MatDialogRef<residential_status>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,public dialog: MatDialog,
//     private regServ:RegistrationService) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
//   loan17(){
//     this.dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.loan18()
//     })
//   }
//   loan18(): void{
//     const dialogRef = this.dialog.open(Anyotherbankdetails, {
//       width: '750px',


//     })


//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed',result);
//       this.regServ.useranyotherloanData = result;

//       // this.name = result;
//     });
//   }
// }

// @Component({
//   selector: 'app-twowheeler',
//   templateUrl: 'twowheeler.html',
// })
// export class Twowheeler {
// public user:any={};
// public twowhel;
// public twowheelerData:any={};

//   constructor(
//     public dialogRef: MatDialogRef<nomineesrelation>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog,
//     private regServ:RegistrationService) {}
//    onNoClick(): void {
//     this.dialogRef.close();
//   }
//   loan1(){
//     this.dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.loan2()
//     })
//   }
//   loan2(): void{
//     const dialogRef = this.dialog.open(Loandetails, {
//       width: '750px',

//     })


//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed',result);
//       this.regServ.userTwowheelerData = result;
//     });
//   }
//   loan3(){
//     this.dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.loan4()
//     })
//   }
//   loan4(): void{
//     const dialogRef = this.dialog.open(Fourwheeler, {
//       width: '750px',


//     })


//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       // this.name = result;
//     });
//   }
// }

// @Component({
//   selector: 'app-fourwheeler',
//   templateUrl: 'fourwheeler.html',
// })
// export class Fourwheeler {
// public user:any={};


//   constructor(
//     public dialogRef: MatDialogRef<nomineesrelation>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog,
//     private regServ:RegistrationService) {}
//    onNoClick(): void {
//     this.dialogRef.close();
//   }
//   loan5(){
//     this.dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.loan6()
//     })
//   }
//   loan6(): void{
//     const dialogRef = this.dialog.open(Fourbankdetails, {
//       width: '750px',

//     })


//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed',result);
//       this.regServ.userfourwheelerData = result;

//       // this.name = result;
//     });
//   }

//   loan7(){
//     this.dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.loan8()
//     })
//   }
//   loan8(): void{
//     const dialogRef = this.dialog.open(Personalloan, {
//       width: '750px',

//     })


//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       // this.name = result;
//     });
//   }



// }


// @Component({
//   selector: 'app-loandetails',
//   templateUrl: 'loandetails.html',
// })
// export class Loandetails{
// public user:any={};

// keyPress(event: any) {
//       const pattern = /[0-9]/;

//       let inputChar = String.fromCharCode(event.charCode);
//       if (event.keyCode != 8 && !pattern.test(inputChar)) {
//         event.preventDefault();
//       }
//     }
//   constructor(
//     public dialogRef: MatDialogRef<nomineesrelation>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog) {}


//   onNoClick(): void {
//     this.dialogRef.close();
//   }

//   public bankname = ["SBI", "Canara Bank", "Allahabad Bank", "Andhra Bank", "BOI",
//   "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank", "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank",
//   "Indian Bank", "Indian Overseas Bank", "Oriental Bank of Commerce", "Punjab & Sindh Bank", "Punjab National Bank", "Syndicate Bank", "UCO Bank", "Union Bank of India", "Vijaya Bank",
//   "IDBI Bank", "Bharatiya Mahila Bank", "Axis Bank", "Deutsche Bank", "Dhanlaxmi Bank", "Federal Bank", "ICICI Bank", "Karnataka Bank Ltd", "ING Vysya Bank", "Kotak Bank", "Yes Bank Ltd", "Shamrao Vitthal Co-operative Bank",
//   'City Union Bank','Development Credit Bank','Induslnd Bank','Jammu And Kashmir Bank','Karur Vasya Bank','Lakshmi Vilas Bank','South India Bank','United Bank Of India','Standard Chartered Bank', "Others"
// ];
//     selectedBank;
//     public bank:boolean=false;


//   onSelect(bankId) {
//     // var res = str.toString();


//     for (var i = 0; i < this.bankname.length; i++)
//     {
//     if(this.bankname[i]==bankId && this.bankname[i]=="Others"){
//     console.log(bankId)
//     this.bank=true;
//     this.selectedBank = null;
//     }
//     else{
//       this.bank=false;
//     }
// }

// }



// }

// @Component({
//   selector: 'app-anyotherbankdetails',
//   templateUrl: 'anyotherbankdetails.html',
// })
// export class Anyotherbankdetails{
// public user:any={};
// keyPress(event: any) {
//       const pattern = /[0-9]/;

//       let inputChar = String.fromCharCode(event.charCode);
//       if (event.keyCode != 8 && !pattern.test(inputChar)) {
//         event.preventDefault();
//       }
//     }

//   constructor(
//     public dialogRef: MatDialogRef<nomineesrelation>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog) {}


//   onNoClick(): void {
//     this.dialogRef.close();
//   }

//   public bankname = ["SBI", "Canara Bank", "Allahabad Bank", "Andhra Bank", "BOI",
//   "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank", "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank",
//   "Indian Bank", "Indian Overseas Bank", "Oriental Bank of Commerce", "Punjab & Sindh Bank", "Punjab National Bank", "Syndicate Bank", "UCO Bank", "Union Bank of India", "Vijaya Bank",
//   "IDBI Bank", "Bharatiya Mahila Bank", "Axis Bank", "Deutsche Bank", "Dhanlaxmi Bank", "Federal Bank", "ICICI Bank", "Karnataka Bank Ltd", "ING Vysya Bank", "Kotak Bank", "Yes Bank Ltd", "Shamrao Vitthal Co-operative Bank",
//   'City Union Bank','Development Credit Bank','Induslnd Bank','Jammu And Kashmir Bank','Karur Vasya Bank','Lakshmi Vilas Bank','South India Bank','United Bank Of India','Standard Chartered Bank', "Others"
// ];
//     selectedBank;
//     public bank:boolean=false;


//   onSelect(bankId) {
//     // var res = str.toString();


//     for (var i = 0; i < this.bankname.length; i++)
//     {
//     if(this.bankname[i]==bankId && this.bankname[i]=="Others"){
//     console.log(bankId)
//     this.bank=true;
//     this.selectedBank = null;
//     }
//     else{
//       this.bank=false;
//     }
// }

// }



// }

// @Component({
//   selector: 'app-homeloanbankdetails',
//   templateUrl: 'homeloanbankdetails.html',
// })
// export class Homeloanbankdetails{
// public user:any={};
// keyPress1(event: any) {
//       const pattern = /[0-9]/;

//       let inputChar = String.fromCharCode(event.charCode);
//       if (event.keyCode != 8 && !pattern.test(inputChar)) {
//         event.preventDefault();
//       }
//     }

//   constructor(
//     public dialogRef: MatDialogRef<nomineesrelation>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog) {}


//   onNoClick(): void {
//     this.dialogRef.close();
//   }

//   public bankname = ["SBI", "Canara Bank", "Allahabad Bank", "Andhra Bank", "BOI",
//   "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank", "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank",
//   "Indian Bank", "Indian Overseas Bank", "Oriental Bank of Commerce", "Punjab & Sindh Bank", "Punjab National Bank", "Syndicate Bank", "UCO Bank", "Union Bank of India", "Vijaya Bank",
//   "IDBI Bank", "Bharatiya Mahila Bank", "Axis Bank", "Deutsche Bank", "Dhanlaxmi Bank", "Federal Bank", "ICICI Bank", "Karnataka Bank Ltd", "ING Vysya Bank", "Kotak Bank", "Yes Bank Ltd", "Shamrao Vitthal Co-operative Bank",
//   'City Union Bank','Development Credit Bank','Induslnd Bank','Jammu And Kashmir Bank','Karur Vasya Bank','Lakshmi Vilas Bank','South India Bank','United Bank Of India','Standard Chartered Bank', "Others"
// ];
//     selectedBank;
//     public bank:boolean=false;


//   onSelect(bankId) {
//     // var res = str.toString();


//     for (var i = 0; i < this.bankname.length; i++)
//     {
//     if(this.bankname[i]==bankId && this.bankname[i]=="Others"){
//     console.log(bankId)
//     this.bank=true;
//     this.selectedBank = null;
//     }
//     else{
//       this.bank=false;
//     }
// }

// }



// }

// @Component({
//   selector: 'app-fourbankdetails',
//   templateUrl: 'fourbankdetails.html',
// })
// export class Fourbankdetails{
// public user:any={};
// keyPress(event: any) {
//       const pattern = /[0-9]/;

//       let inputChar = String.fromCharCode(event.charCode);
//       if (event.keyCode != 8 && !pattern.test(inputChar)) {
//         event.preventDefault();
//       }
//     }

//   constructor(
//     public dialogRef: MatDialogRef<nomineesrelation>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog) {}


//   onNoClick(): void {
//     this.dialogRef.close();
//   }

//   public bankname = ["SBI", "Canara Bank", "Allahabad Bank", "Andhra Bank", "BOI",
//   "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank", "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank",
//   "Indian Bank", "Indian Overseas Bank", "Oriental Bank of Commerce", "Punjab & Sindh Bank", "Punjab National Bank", "Syndicate Bank", "UCO Bank", "Union Bank of India", "Vijaya Bank",
//   "IDBI Bank", "Bharatiya Mahila Bank", "Axis Bank", "Deutsche Bank", "Dhanlaxmi Bank", "Federal Bank", "ICICI Bank", "Karnataka Bank Ltd", "ING Vysya Bank", "Kotak Bank", "Yes Bank Ltd", "Shamrao Vitthal Co-operative Bank",
//   'City Union Bank','Development Credit Bank','Induslnd Bank','Jammu And Kashmir Bank','Karur Vasya Bank','Lakshmi Vilas Bank','South India Bank','United Bank Of India','Standard Chartered Bank', "Others"
// ];
//     selectedBank;
//     public bank:boolean=false;


//   onSelect(bankId) {
//     // var res = str.toString();


//     for (var i = 0; i < this.bankname.length; i++)
//     {
//     if(this.bankname[i]==bankId && this.bankname[i]=="Others"){
//     console.log(bankId)
//     this.bank=true;
//     this.selectedBank = null;
//     }
//     else{
//       this.bank=false;
//     }
// }

// }



// }

// @Component({
//   selector: 'app-personalbankdetails',
//   templateUrl: 'personalbankdetails.html',
// })
// export class Personalbankdetails{
// public user:any={};

// keyPress(event: any) {
//       const pattern = /[0-9]/;

//       let inputChar = String.fromCharCode(event.charCode);
//       if (event.keyCode != 8 && !pattern.test(inputChar)) {
//         event.preventDefault();
//       }
//     }
//   constructor(
//     public dialogRef: MatDialogRef<nomineesrelation>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog) {}


//   onNoClick(): void {
//     this.dialogRef.close();
//   }

//   public bankname = ["SBI", "Canara Bank", "Allahabad Bank", "Andhra Bank", "BOI",
//   "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank", "Bank of Baroda", "Bank of Maharashtra", "Central Bank of India", "Corporation Bank", "Dena Bank",
//   "Indian Bank", "Indian Overseas Bank", "Oriental Bank of Commerce", "Punjab & Sindh Bank", "Punjab National Bank", "Syndicate Bank", "UCO Bank", "Union Bank of India", "Vijaya Bank",
//   "IDBI Bank", "Bharatiya Mahila Bank", "Axis Bank", "Deutsche Bank", "Dhanlaxmi Bank", "Federal Bank", "ICICI Bank", "Karnataka Bank Ltd", "ING Vysya Bank", "Kotak Bank", "Yes Bank Ltd", "Shamrao Vitthal Co-operative Bank",
//   'City Union Bank','Development Credit Bank','Induslnd Bank','Jammu And Kashmir Bank','Karur Vasya Bank','Lakshmi Vilas Bank','South India Bank','United Bank Of India','Standard Chartered Bank', "Others"
// ];
//     selectedBank;
//     public bank:boolean=false;


//   onSelect(bankId) {
//     // var res = str.toString();


//     for (var i = 0; i < this.bankname.length; i++)
//     {
//     if(this.bankname[i]==bankId && this.bankname[i]=="Others"){
//     console.log(bankId)
//     this.bank=true;
//     this.selectedBank = null;
//     }
//     else{
//       this.bank=false;
//     }
// }

// }



// }

// @Component({
//   selector: 'shopowner',
//   templateUrl: 'shopowner.html',
// })
// export class shopowner {

// keyPress(event: any) {
//       const pattern = /[0-9]/;

//       let inputChar = String.fromCharCode(event.charCode);
//       if (event.keyCode != 8 && !pattern.test(inputChar)) {
//         event.preventDefault();
//       }
//     }
// keyPress1(event: any) {
//       const pattern = /[a-zA-Z\ ]/;

//       let inputChar = String.fromCharCode(event.charCode);
//       if (event.keyCode != 8 && !pattern.test(inputChar)) {
//         event.preventDefault();
//       }
//     }

// public user:any={};
//   constructor(
//     public dialogRef: MatDialogRef<shopowner>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
//     selfincome = ['0-2 L', '2-4 L', '4-6 L', '6-10 L', '10-15 L', '15-25 L', '25 L+'];
//     Twelvemonthselfincome=['0-2 L', '2-4 L', '4-6 L', '6-10 L', '10-15 L', '15-25 L', '25 L+'];
//     onNoClick(): void {
//       this.dialogRef.close();
//     }
//   }

// @Component({
//   selector: 'permanenthouse',
//   templateUrl: 'permanenthouse.html',
// })
// export class permanenthouse {

//   constructor(
//     public dialogRef: MatDialogRef<divorce>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,private regServ:RegistrationService) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
//   public permanentadderess:any={};
//   cities: Array<any>;
//   changeCountry(count1) {
//     this.cities = this.countryList.find(con => con.name == count1).cities;
//   }
//   public countryList:any;
//   ngOnInit(){
//     this.countryList = this.regServ.countryList1
//     console.log("countryyyyyyyyyy    this.AllcountriesList", this.countryList)
//   }
//   permanentadderessdetail(data){
//     console.log(data);
//    }
//     keyPress(event: any) {
//       const pattern = /[a-zA-Z\0-9\/\#\@\ ]/;

//       let inputChar = String.fromCharCode(event.charCode);
//       if (event.keyCode != 8 && !pattern.test(inputChar)) {
//         event.preventDefault();
//       }
//     }

//     keyPress1(event: any) {
//       const pattern = /[a-zA-Z\0-9\ ]/;

//       let inputChar = String.fromCharCode(event.charCode);
//       if (event.keyCode != 8 && !pattern.test(inputChar)) {
//         event.preventDefault();
//       }
//     }
//     keyPressNo(event: any) {
//       const pattern = /[0-9]/;

//       let inputChar = String.fromCharCode(event.charCode);
//       if (event.keyCode != 8 && !pattern.test(inputChar)) {
//         event.preventDefault();
//       }
//     }
// }
