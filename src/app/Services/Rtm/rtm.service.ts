import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RtmService {

  constructor(public http:HttpClient) { }

  public serdata:any={};

  private baseUrl = environment.base_url;
 

 rtmloan_status() {
    
     let url:string =`${this.baseUrl}/loan_request/`
   	 return this.http.get(url);
  }
  disbursedloan(data)
  {
  	console.log("finalservice",data);
  	let url:string =`${this.baseUrl}/approve_request/`
   	 return this.http.post(url,data);
  }
  silverloantype(){
     let url:string =`${this.baseUrl}/getsilverloantype/`
      return this.http.get(url);
  }
  goldloantype(){
    let url:string =`${this.baseUrl}/getgoldloantype/`
      return this.http.get(url);

  }
   platinumloantype(){
    let url:string =`${this.baseUrl}/getpaltinumloantype/`
      return this.http.get(url);

  }
}
