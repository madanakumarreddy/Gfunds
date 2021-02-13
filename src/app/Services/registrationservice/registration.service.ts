import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  public transdetails: any = {};
  public transcount: any = {};
  public logState;
  public showprofilepic;
  public profiles;


  getToken() {
    console.log("locallllllllll called");
    return localStorage.getItem('token');
  }

  constructor(private http: HttpClient) { }
  public userTwowheelerData: any = {};
  public userfourwheelerData: any = {};
  public userpersonalloanData: any = {};
  public userhomeloanData: any = {};
  public useranyotherloanData: any = {};
  MyProfile;

  // public MaritalStatus:any={};

  private baseUrl = environment.base_url;

  createUser(employee) {

    console.log(employee);
    let url: string = `${this.baseUrl}/register/`;
    return this.http.post(url, employee);
  }
  Memberfinalreg(data) {
    console.log("finaldata", data);
    let url: string = `${this.baseUrl}/finalregister/`;
    return this.http.post(url, data);
  }

  Cibilfile(data) {
    console.log("service data", data);
    let url: string = `${this.baseUrl}/uploadcibilfile/`;
    return this.http.post(url, data);
  }

  Cibilfile2(data) {
    console.log("service data", data);
    let url: string = `${this.baseUrl}/getcibilfile/`;
    return this.http.post(url, data);
  }

  forgot(data) {
    let url: string = `${this.baseUrl}/forgotpassword/`;
    return this.http.post(url, data);
  }

  verifyuser(otp) {
    let url: string = `${this.baseUrl}/verifyotp/`;
    return this.http.post(url, otp);
  }

  reset(data) {
    let url: string = `${this.baseUrl}/resetpassword/`;
    return this.http.post(url, data);
  }


  upcomingfund() {
    let url: string = `${this.baseUrl}/upcomingfunds/`;
    return this.http.get(url);
  }

  appmem(data) {
    console.log("dataa in serrr", data);
    let url: string = `${this.baseUrl}/editapprovemem/`;
    return this.http.post(url, data);
  }
  sendotp(data) {
    console.log('send itp in service', data);
    let url = `${this.baseUrl}/generateotp/`;
    return this.http.post(url, data);
  }

  login(user) {
    console.log("login", user);
    let url: string = `${this.baseUrl}/logindata/`;
    return this.http.post(url, user);

  }
  verify_otp(data) {
    console.log('hiiiiiiiiiii', data);
    let url: string = `${this.baseUrl}/verifyotp/`;
    return this.http.post(url, data);
  }
  getusers() {
    console.log("hi");
    return this.countryList1;
  }

  dashboarddetails() {
    let url: string = `${this.baseUrl}/viewdashboard/`;
    return this.http.get(url);
  }

  profiledata2(): Observable<any> {
    let url: string = `${this.baseUrl}/Profiledata/`;
    return this.http.get(url);
  }

  // Profilepic(){
  //     let url:string = `${this.baseUrl}/profiledp/`
  //     return this.http.get(url)

  // }
  transactions(data) {
    let url: string = `${this.baseUrl}/trans/`;
    return this.http.post(url, data);
  }

  auctiontransdata(data) {
    console.log("hhhhauctiontransdata", data)
    let url: string = `${this.baseUrl}/auctiontransid/`
    return this.http.post(url, data)
  }


  uploadpic(data: any) {
    console.log("Agreementtt fileeeeeeeeeeeee", data);
    let url: string = `${this.baseUrl}/uploadpics/`;
    return this.http.post(url, data);
  }


  uploadpic1(data: any) {
    console.log("RTM fileee", data);
    let url: string = `${this.baseUrl}/uploadpics/`;
    return this.http.post(url, data);
  }


  uploadpic2(data: any) {
    console.log("Additionalll fileee", data);
    let url: string = `${this.baseUrl}/uploadpics/`;
    return this.http.post(url, data);
  }


  getmemfile() {
    console.log("documenttt data");
    let url: string = `${this.baseUrl}/getmemdocs/`;
    return this.http.get(url);
  }

  public countryList1: Array<any> = [
    {
      name: 'Andhra Pradesh', cities: ['Anantapur',
        'Chittoor',
        'East Godavari',
        'Guntur',
        'Krishna',
        'Kurnool',
        'Prakasam',
        'Sri Potti Sri Ramulu Nellore',
        'Srikakulam',
        'Visakhapatnam',
        'Vizianagaram',
        'West Godavari',
        'YSR Kadapa',]
    },
    {
      name: 'Arunachal Pradesh', cities: ['Anjaw',
        'Changlang',
        'East Kameng',
        'East Siang',
        'Kamle',
        'Kra Daadi',
        'Kurung Kumey',
        'Lohit',
        'Longding',
        'Lower Subansiri',
        'Lower Siang',
        'Lower Dibang Valley',
        'Namsai',
        'Papum Pare',
        'Siang',
        'Tawang',
        'Tirap',
        'Upper Dibang Valley',
        'Upper Siang',
        'Upper Subansiri',
        'West Kameng',
        'West Siang',]
    },
    {
      name: 'Assam', cities: ['Baksa',
        'Barpeta',
        'Biswanath',
        'Bongaigaon',
        'Cachar',
        'Charaideo',
        'Chirang',
        'Darrang',
        'Dhemaji',
        'Dhubri',
        'Dibrugarh',
        'Dima Hasao',
        'Goalpara',
        'Golaghat',
        'Hailakandi',
        'Hojai',
        'Jorhat',
        'Kamrup Metropolitan',
        'Kamrup',
        'Karbi Anglong',
        'Karimganj',
        'Kokrajhar',
        'Lakhimpur',
        'Majuli',
        'Morigaon',
        'Nagaon',
        'Nalbari',
        'Sivasagar',
        'Sonitpur',
        'South Salmara-Mankachar',
        'Tinsukia',
        'Udalguri',
        'West Karbi Anglong',]
    },
    {
      name: 'Bihar', cities: ['Araria',
        'Arwal',
        'Aurangabad',
        'Banka',
        'Begusarai',
        'Bhagalpur',
        'Bhojpur',
        'Buxar',
        'Darbhanga',
        'East Champaran',
        'Gaya',
        'Gopalganj',
        'Jamui',
        'Jehanabad',
        'Khagaria',
        'Kishanganj',
        'Kaimur',
        'Katihar',
        'Lakhisarai',
        'Madhubani',
        'Munger',
        'Madhepura',
        'Muzaffarpur',
        'Nalanda',
        'Nawada',
        'Patna',
        'Purnia',
        'Rohtas ',
        'Saharsa',
        'Samastipur',
        'Sheohar',
        'Sheikhpura',
        'Saran',
        'Sitamarhi',
        'Supaul',
        'Siwan',
        'Vaishali',
        'West Champaran',]
    },
    {
      name: 'Chhattisgarh', cities: ['Balod',
        'Baloda Bazar',
        'Balrampur',
        'Bastar',
        'Bemetara',
        'Bijapur',
        'Bilaspur',
        'Dantewada',
        'Dhamtari',
        'Durg',
        'Gariaband',
        'Janjgir-Champa',
        'Jashpur',
        'Kabirdham',
        'Kanker',
        'Kondagaon',
        'Korba',
        'Koriya',
        'Mahasamund',
        'Mungeli',
        'Narayanpur',
        'Raigarh',
        'Raipur',
        'Rajnandgaon',
        'Sukma',
        'Surajpur',
        'Surguja',]
    },
    {
      name: 'Goa', cities: ['North Goa',
        'South Goa',]
    },
    {
      name: 'Gujarat', cities: ['Ahmedabad',
        'Amreli',
        'Anand',
        'Aravalli',
        'Banaskantha',
        'Bharuch',
        'Bhavnagar',
        'Botad',
        'Chhota Udaipur',
        'Dahod',
        'Dang',
        'Devbhoomi Dwarka',
        'Gandhinagar',
        'Gir Somnath',
        'Jamnagar',
        'Junagadh',
        'Kutch',
        'Kheda',
        'Mahisagar',
        'Mehsana',
        'Morbi',
        'Narmada',
        'Navsari',
        'Panchmahal',
        'Patan',
        'Porbandar',
        'Rajkot',
        'Sabarkantha',
        'Surat',
        'Surendranagar',
        'Tapi',
        'Vadodara',
        'Valsad',]
    },
    {
      name: 'Haryana', cities: ['Ambala',
        'Bhiwani',
        'Charkhi Dadri',
        'Faridabad',
        'Fatehabad',
        'Gurugram',
        'Hisar',
        'Jhajjar',
        'Jind',
        'Kaithal',
        'Karnal',
        'Kurukshetra',
        'Mahendragarh',
        'Nuh',
        'Palwal',
        'Panchkula',
        'Panipat',
        'Rewari',
        'Gurgaon',
        'Rohtak',
        'Sirsa',
        'Sonipat',
        'Yamunanagar',]
    },
    {
      name: 'Himachal Pradesh', cities: ['Bilaspur',
        'Chamba',
        'Hamirpur',
        'Kangra',
        'Kinnaur',
        'Kullu',
        'Lahaul-Spiti',
        'Mandi',
        'Shimla',
        'Solan',
        'Sirmour',
        'Una',]
    },
    {
      name: 'Jammu & Kashmir', cities: ['Anantnag District',
        'Bandipora District',
        'Baramulla district',
        'Budgam District',
        'Doda District',
        'Ganderbal District',
        'Jammu District',
        'Kathua District',
        'Kishtwar District',
        'Kulgam District',
        'Kupwara District',
        'Kargil District',
        'Leh District',
        'Poonch District',
        'Pulwama District',
        'Rajouri District',
        'Ramban District',
        'Reasi District',
        'Samba District',
        'Shopian District',
        'Srinagar District',
        'Udhampur District',]
    },
    {
      name: 'Jharkhand', cities: ['Bokaro',
        'Chatra',
        'Deoghar',
        'Dhanbad',
        'Dumka',
        'East Singhbhum(Jamshedpur)',
        'Garhwa',
        'Giridih',
        'Godda',
        'Gumla',
        'Hazaribagh',
        'Jamtara',
        'Koderma',
        'kunti',
        'Latehar',
        'Lohardaga',
        'Palamu',
        'Pakur',
        'Ramgarh',
        'Ranchi',
        'Sahebganj',
        'Simdega',
        'Saraikela Kharsawan',
        'West Singhbhum(Chaibasa)',]
    },
    {
      name: 'Karnataka', cities: ['Bagalkot',
        'Bengaluru Rural',
        'Bengaluru Urban',
        'Belagavi',
        'Ballari',
        'Bidar',
        'Chamarajanagar',
        'Chikballapur',
        'Chitradurga',
        'Chikkamagalur',
        'Chitradurga',
        'Dakshina Kannada',
        'Davanagare',
        'Dharwad',
        'Gadag',
        'Hassan',
        'Haveri',
        'Kalaburagi',
        'Kodagu',
        'Kolar',
        'Koppal',
        'Mandya',
        'Mysuru',
        'Raichur',
        'Ramanagara',
        'Shivamogga',
        'Tumakuru',
        'Udupi',
        'Uttara Kannada',
        'Vijayapur',
        'Yadgir',]
    },
    {
      name: 'Kerala', cities: ['Alapuzzha',
        'Ernakulam',
        'Idukki',
        'Kannur',
        'Kasaragod',
        'Kollam',
        'Kottayam',
        'Kozhikode',
        'Malappuram',
        'Palakkad',
        'Pathanamthitta',
        'Thiruvananthapuram',
        'Thrissur',
        'Wayanad',]
    },
    {
      name: 'Madhya Pradesh', cities: ['Ashoknagar',
        'Alirajpur',
        'Anuppur',
        'Agar Malwa',
        'Barwani',
        'Bhopal',
        'Balaghat',
        'Betul',
        'Bhind',
        'Burhanpur',
        'Chhindwara',
        'Chhattarpur',
        'Datia',
        'Dhar',
        'Dindori',
        'Damoh',
        'Dewas',
        'Gwalior',
        'Guna',
        'Harda',
        'Hoshangabad',
        'Indore',
        'Jhabua',
        'Jabalpur',
        'Khandwa',
        'Khargone',
        'Katni',
        'Morena',
        'Mandla',
        'Mandsaur',
        'Neemuch',
        'Panna',
        'Raisen',
        'Rajgarh',
        'Rewa',
        'Ratlam',
        'Sindi',
        'Satna',
        'Shahdol',
        'Sehore',
        'Sagar',
        'Seoni',
        'Shivpuri',
        'Shajapur',
        'Sheopur',
        'Singrauli',
        'Umaria',
        'Ujjain',
        'Vidisha',]
    },
    {
      name: 'Maharashtra', cities: ['Aurangabad',

        ' Bandra(Mumbai Suburban district)',
        'Nagpur',
        'Pune',
        'Akola',
        'Chandrapur',
        'Jalgaon',
        'Parbhani',
        'Sholapur',
        'Thane',
        'Latur',
        'Mumbai-City',
        'Buldhana',
        'Dhule',
        'Kolhpur',
        'Nanded',
        'Raigad',
        'Amravati',
        'Nashik',
        'Wardha',
        'Ahmednagar',
        'Beed',
        'Bhandara',
        'Gadchiroli',
        'Jalna',
        'Osmanabad',
        'Ratnagiri',
        'Sangli',
        'Satara',
        'Sindudurg',
        'Yavatmal',
        'Nandurbar',
        'Washim',
        'Gondia',
        'Hingoli']
    },
    {
      name: 'Manipur', cities: [' Imphal East',

        ' Imphal West',
        'Thoubal',
        'Bishnupur',
        'Chandel',
        'Churachandpur',
        'Senapati',
        'Ukhrul',
        'Tamenglong']
    },
    {
      name: 'Meghalaya', cities: ['Ri-Bhoi District',

        'South Garo Hills',
        'East Khasi Hill',
        'East Garo Hill',
        'West Garo Hill',
        'Jaintia Hill',
        'West Khasi Hill']
    },
    {
      name: 'Mizoram', cities: ['Luglei District',

        'Chimtipui District',
        'Aizawal',
        'Champhai',
        'Mamit',
        'Kolasib',
        'Serchhip',
        'Lawngtlai']
    },
    {
      name: 'Nagaland', cities: ['Wokha',

        'Phek',
        'Tuensang',
        'Mon',
        'Kohima',
        'Zunheboto',
        'Mokokchung',
        'Dimapur']
    },
    {
      name: 'Odisha', cities: ['Khurda',
        'Navaragpur',
        'Navapada',
        'Gajapati',
        'Boudh',
        'Bhadrak',
        'Ganjam',
        'Dhenkanal',
        'Angul',
        'Puri',
        'Cuttak',
        'Sambalpur',
        'Kalhandi',
        'Koraput',
        'Phulbani',
        'Balangir',
        'Bargarh',
        'Deogarh',
        'Jagatsinghpur',
        'Jajpur',
        'Jharsuguda',
        'Kendrapara',
        'Malkangiri',
        'Nayagarh',
        'Rayagada',
        'Sonepur',
        'Balasore',
        'Mayurbhanj',
        'Keonjhar',
        'Sundergarh']
    },
    {
      name: 'Punjab', cities: ['Sangrur',

        'Jalandhar',
        'Ludhiana',
        'Bhatinda',
        'Kapurthala',
        'Patiala',
        'Amritsar',
        'Ferozepur',
        'Fatehgarh Saheb',
        'Ropar',
        'Gurdaspur',
        'Hosiarpur',
        'Faridkot',
        'Mansa',
        'Moga',
        'Muktsar',
        'Navansahar']
    },
    {
      name: 'Rajasthan', cities: ['Jaipur',

        'Barmer',
        'Dungarpur',
        'Jodhpur',
        'Kota',
        'Udaipur',
        'Bikaner',
        'Dausa',
        'Bundi',
        'Sikar',
        'Tonk',
        'Jaisalmer',
        'Nagaur',
        'Rajsamand',
        'Banswara',
        'Bhilwara',
        'Ajmer',
        'Alwar',
        'Bharatpur',
        'Chittorgarh',
        'Churu',
        'Dholpur',
        'Ganganagar',
        'Jalor',
        'Jhalawar',
        'Jhunjhunu',
        'Pali',
        'Sawai Madhopur',
        'Sirohi',
        'Baran',
        'Hanumangarh',
        'Karauli']
    },
    {
      name: 'Sikkim', cities: ['East',

        'South',
        'West',
        'North']
    },
    {
      name: 'Tamil Nadu', cities: ['Chennai',

        'Coimbotore',
        'Cuddalorei',
        'Dharmapuri',
        'Dindigul',
        'Erode',
        'Kancheepuram',
        'Kanniyakumari (HQ : Nagercoil)',
        'Karur',
        'Madurai',
        'Nagapattinam',
        'Namakkal',
        'Nilgiris (HQ: Udhagamandalam)',
        'Perambalur',
        'Pudukkottai',
        'Ramanathapuram',
        'Salem',
        'Sivaganga',
        'Thanjavur',
        'Theni',
        'Thoothkudi',
        'Tiruchiorappalli',
        'Tirunelveli',
        'Tiruvallur',
        'Tiruvannamalai',
        'Tiruvarur',
        'Vellore',
        'Villupuram',
        'Virudhunagar']
    },
    {
      name: 'Telangana', cities: ['Adilabad',
        'Bhadradri Kothagudem',
        'Hyderabad',
        'Jagtial',
        'Jangaon',
        'Jayashankar Bhupalapally',
        'Jogulamba Gadwal',
        'Kamareddy',
        'Karimnagar',
        'Khammam',
        'Kumarambheem Asifabad',
        'Mahabubabad',
        'Mahabubnagar',
        'Mancherial',
        'Medak',
        'Medchal–Malkajgiri',
        'Nagarkurnool',
        'Nalgonda',
        'Nirmal',
        'Nizamabad',
        'Peddapalli',
        'Rajanna Sircilla',
        'Ranga Reddy',
        'Sangareddy',
        'Siddipet',
        'Suryapet',
        'Vikarabad',
        'Wanaparthy',
        'Warangal Rural',
        'Warangal Urban',
        'Yadadri Bhuvanagiri']
    },
    {
      name: 'Tripura', cities: [' North District',

        'South District',
        'West District',
        'Dhalai District']
    },
    {
      name: 'Uttar Pradesh', cities: ['Allahabad',

        'Aligarh',
        'Bareilly',
        'Gonda',
        'Hardoi',
        'Kanpur Dehat',
        'Ghaziabad',
        'Unnav',
        'Varanasi',
        'Faizabad',
        'Gorakpur',
        'Jhansi',
        'Lucknow',
        'Agra',
        'Meerut',
        'Moradabad',
        'Barabanki',
        'Mainpuri',
        'Etawah',
        'Gazipur',
        'Etah',
        'Muzaffar Nagar',
        'Saharanpur',
        'Bulandshehar',
        'Mathura',
        'Firozabad',
        'Budaun',
        'Shahjahanpur',
        'Pilibhit',
        'Bijnor',
        'Rampur',
        'Kanpur(Nagar)',
        'Farrukhabad',
        'Fatehpur',
        'Pratapgarh',
        'Jalaun',
        'Hamirpur',
        'Lalitpur',
        'Mirzapur',
        'Basti',
        'Deoria',
        'Raebareili',
        'Sitapur',
        'Banda',
        'Lakhimpur-Khedi',
        'Bahraich',
        'Sultanpur',
        'Mau',
        'Azamgarh',
        'Jaunpur',
        'Balia',
        'Bhadoi',
        'Padrauna',
        'Maharajganj',
        'Siddharth Nagar',
        'Sunbhadra',
        'Mahoba',
        'Ambedkarnagar',
        'Gautam Bodda Nagar',
        'Maha Maya Nagar',
        'jyotiba Phoole Nagar',
        'Kaushambi',
        'Shooji Maharaj',
        'Chandauli',
        'Balrampur',
        'Shravati',
        'Bagpat',
        'Kanooj',
        'Oraiyya',
        'Sant Kabir Nagar']
    },
    {
      name: 'Uttarakhand', cities: ['Nainital',

        'Almora',
        'Pitoragarh',
        'Udhamsingh Nagar',
        'Bageshwar',
        'Champawat',
        'Garhwal(Pauri)',
        'Tehri-Garhwal',
        'Chamoli( Gopeshwar )',
        'Uttarkashi',
        'Dehradun',
        'Rudraprayag',
        'Haridwar']
    },
    {
      name: ' West Bengal', cities: ['Howrah',

        'Darjeeling',
        'Medinipur',
        'Murshidabad',
        'Coochbehar',
        'Malda',
        'Birbhum',
        'North 24 Parganas',
        'South 24 Parganas',
        'Bankura',
        'Bardhaman',
        'Jalpaiguri',
        'Hooghly',
        'Nadia',
        'Dakshin Dinajpur',
        'Purulia',
        'Uttar Dinajpur',
        'Siliguri']
    },
    {
      name: 'Andaman & Nicobar', cities: ['Andaman',

        'Nicobar']
    },
    { name: 'Chandigarh', cities: ['Chandigarh'] },
    { name: 'Dadra & Nagar Haveli', cities: ['Dadra'] },
    {
      name: 'Daman & Diu', cities: ['Dama',

        'Diu']
    },
    { name: 'Lakshadweep', cities: ['Lakshadweep'] },
    {
      name: 'NCT Delhi', cities: ['New Delhi',

        'Central',
        'North',
        'North West',
        'West',
        'South West',
        'North',
        'North East']
    },
    {
      name: 'Puducherry', cities: ['Karikal',

        'Mahe',
        'Yaman',
        'Pondicherry']
    },

  ];
  // tslint:disable-next-line: whitespace
  // tslint:disable-next-line: member-ordering
  public ifscList1: any = [
    [{ 'bank': ['SBI'] }, {
      'ifsccode': ['SBIN']
    }],
    [{ 'bank': ['Canara Bank'] }, {
      'ifsccode': ['CNRB']
    }],
    [{ 'bank': ['Allahabad Bank'] }, {
      'ifsccode': ['ALLA']
    }],
    [{ 'bank': ['Andhra Bank'] }, {
      'ifsccode': ['ANDB']
    }],
    [{ 'bank': ['BOI'] }, {
      'ifsccode': ['BKID']
    }],
    [{ 'bank': ['Bank of Baroda'] }, {
      'ifsccode': ['BARB']
    }],
    [{ 'bank': ['Bank of Maharashtra'] }, {
      'ifsccode': ['MAHB']
    }],
    [{ 'bank': ['Central Bank of India'] }, {
      'ifsccode': ['CBIN']
    }],
    [{ 'bank': ['Corporation Bank'] }, {
      'ifsccode': ['CORP']
    }],
    [{ 'bank': ['Dena Bank'] }, {
      'ifsccode': ['BKDN']
    }],
    [{ 'bank': ['Indian Bank'] }, {
      'ifsccode': ['IDIB']
    }],
    [{ 'bank': ['Indian Overseas Bank'] }, {
      'ifsccode': ['IOBA']
    }],
    [{ 'bank': ['Oriental Bank of Commerce'] }, {
      'ifsccode': ['ORBC']
    }],
    [{ 'bank': ['Punjab & Sindh Bank'] }, {
      'ifsccode': ['PSIB']
    }],
    [{ 'bank': ['Punjab National Bank'] }, {
      'ifsccode': ['PUNB']
    }],
    [{ 'bank': ['Syndicate Bank'] }, {
      'ifsccode': ['SYNB']
    }],
    [{ 'bank': ['UCO Bank'] }, {
      'ifsccode': ['UCBA']
    }],
    [{ 'bank': ['Union Bank of India'] }, {
      'ifsccode': ['UBIN']
    }],
    [{ 'bank': ['Vijaya Bank'] }, {
      'ifsccode': ['VIJB']
    }],
    [{ 'bank': ['IDBI Bank'] }, {
      'ifsccode': ['IBKL']
    }],
    [{ 'bank': ['Bharatiya Mahila Bank'] }, {
      'ifsccode': ['BMBL']
    }],
    [{ 'bank': ['Axis Bank'] }, {
      'ifsccode': ['UTIB']
    }],
    [{ 'bank': ['Deutsche Bank'] }, {
      'ifsccode': ['DEUT']
    }],
    [{ 'bank': ['Dhanlaxmi Bank'] }, {
      'ifsccode': ['DLXB']
    }],
    [{ 'bank': ['Federal Bank'] }, {
      'ifsccode': ['FDRL']
    }],
    [{ 'bank': ['ICICI Bank'] }, {
      'ifsccode': ['ICIC']
    }],
    [{ 'bank': ['Karnataka Bank Ltd'] }, {
      'ifsccode': ['KARB']
    }],
    [{ 'bank': ['ING Vysya Bank'] }, {
      'ifsccode': ['VYSA']
    }],
    [{ 'bank': ['Kotak Bank'] }, {
      'ifsccode': ['KKBK']
    }],
    [{ 'bank': ['Yes Bank Ltd'] }, {
      'ifsccode': ['YESB']
    }],
    [{ 'bank': ['Shamrao Vitthal Co-operative Bank'] }, {
      'ifsccode': ['SVCB']
    }],
    [{ 'bank': ['City Union Bank'] }, {
      'ifsccode': ['CIUB']
    }],
    [{ 'bank': ['Development Credit Bank'] }, {
      'ifsccode': ['DCBL']
    }],
    [{ 'bank': ['Induslnd Bank'] }, {
      'ifsccode': ['INDB']
    }],
    [{ 'bank': ['Jammu And Kashmir Bank'] }, {
      'ifsccode': ['JAKA']
    }],
    [{ 'bank': ['Karur Vasya Bank'] }, {
      'ifsccode': ['KVLB']
    }],
    [{ 'bank': ['Lakshmi Vilas Bank'] }, {
      'ifsccode': ['LAVB']
    }],
    [{ 'bank': ['South India Bank'] }, {
      'ifsccode': ['SIBL']
    }],
    [{ 'bank': ['United Bank Of India'] }, {
      'ifsccode': ['UTBI']
    }],
    [{ 'bank': ['Standard Chartered Bank'] }, {
      'ifsccode': ['SCBL']
    }],
    [{ 'bank': ['Others'] }]
  ];



  // public countryList2 = [
  //   'Andhra Pradesh',
  //   'Arunachal Pradesh',
  //   'Assam',
  //   'Bihar',
  //   'Chhattisgarh',
  //   'Goa',
  //   'Gujarat',
  //   'Haryana',
  //   'Himachal Pradesh',
  //   'Jammu & Kashmir',
  //   'Jharkhand',
  //   'Karnataka',
  //   'Kerala',
  //   'Madhya Pradesh',
  //   'Maharashtra',
  //   'Manipur',
  //   'Meghalaya',
  //   'Mizoram',
  //   'Nagaland',
  //   'Odisha',
  //   'Punjab',
  //   'Rajasthan',
  //   'Sikkim',
  //   'Tamil Nadu',
  //   'Telangana',
  //   'Tripura',
  //   'Uttar Pradesh',
  //   'Uttarakhand',
  //   'West Bengal',
  //   'Andaman & Nicobar',
  //   'Chandigarh',
  //   'Dadra & Nagar Haveli', 'Daman & Diu',
  //   'Lakshadweep',
  //   'NCT Delhi',
  //   'Puducherry'

  // ];

}








