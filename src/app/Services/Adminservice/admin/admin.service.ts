import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  public fundmanagedata:any = {};
  public foremandata:any = {};
  public memberData1;
  public sendupcoming:any = {};

  private baseUrl = environment.base_url;
 createUser(employee):Observable <any>  {
    console.log(employee)
     let url:string =`${this.baseUrl}/foremanregister/`
    return this.http.post(url,employee);
  }
   createCa(ca):Observable<any>{
    let url:string =`${this.baseUrl}/caregistration/`
    console.log("caaaaaaaaaaaaaaaaaaaaaaaaaaaaaservice",ca,url)
    return this.http.post(url,ca);
   }

  getOtp(data):Observable<any>{
  let url:string = `${this.baseUrl}/generateotp/`
  return this.http.post(url,data);
  }
  filterconcept(data):Observable<any>{
  let url:string = `${this.baseUrl}/filter/`
  return this.http.post(url,data);
  }

 homeupcoming():Observable<any>{
  let url:string = `${this.baseUrl}/homeupcomingfunds/`
  return this.http.get(url);
  }
  homerunning():Observable<any>{
  let url:string = `${this.baseUrl}/homerunningfunds/`
  return this.http.get(url);
  }
memberlist():Observable<any>{
  let url:string = `${this.baseUrl}/memberlist1/`
  return this.http.get(url);
  }
  approvemember(data):Observable<any>{
  let url:string = `${this.baseUrl}/approvemember/`
  return this.http.post(url,data);
  }
memberdata(data):Observable<any>{
  this.memberData1 = data;
  let url:string = `${this.baseUrl}/memberdata1/`
  return this.http.post(url,data);
  }

  upcomingchit():Observable<any>{
    let url:string = `${this.baseUrl}/managechits/`
    return this.http.get(url);
  }

  fundmanage():Observable<any>{
    let url: string = `${this.baseUrl}/adminmanagefunds/`
    return this.http.get(url);
  }

updatemanagfunds(data):Observable<any>{
    let url: string = `${this.baseUrl}/updatemanagefunds/`
        return this.http.post(url,data);
}

  approveupcomingchit(data):Observable<any>{
    console.log("eeeeeeeeeeeee",data);
    let url:string = `${this.baseUrl}/approveupcomingchit/`
    return this.http.post(url,data);
  }



deletemanagfunds(data):Observable<any>{
  console.log("serrrrrrrrrrrrrrr",data);
    let url: string = `${this.baseUrl}/updatemanagefunds/`
    return this.http.post(url,data);

}



manageForemanDetail():Observable<any>{
  console.log("serrrrrrrrrrrrrrr");
    let url: string = `${this.baseUrl}/manageforeman/`
    return this.http.get(url);
}



updatemanageforeman(data):Observable<any>{
  console.log("serrrrrrrvicccccccccc",data);
    let url: string = `${this.baseUrl}/updateforeman/`
    return this.http.post(url,data);

}



deleteforeman(data):Observable<any>{
  console.log("serrrrrrrrrrrrrrr",data);
    let url: string = `${this.baseUrl}/updateforeman/`
    return this.http.post(url,data);

}

adminapproveforeman(data):Observable<any>{
  console.log("appppr r serccccccccc",data);
  let url:string = `${this.baseUrl}/approveforeman/`
  return this.http.post(url,data);
}

upchit():Observable<any>{
  let url:string = `${this.baseUrl}/managechits/`
  return this.http.get(url);

}
getrundata(data):Observable<any>{
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  let url:string = `${this.baseUrl}/adminrun/`
  return this.http.post(url,data);
}

getexecutivedata():Observable<any>{
let url:string = `${this.baseUrl}/getExecutiveinfo/`
 return this.http.get(url);

}


}

