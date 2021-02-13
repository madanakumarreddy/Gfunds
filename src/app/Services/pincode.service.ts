import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpBackend, HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PincodeService {

  constructor(private http: HttpClient, handler: HttpBackend ) {
    this.http = new HttpClient(handler);
}

  checkPin(picode) : Observable <any>{
  	console.log("IN SERRRRRRRRRRR",picode);
  	localStorage.clear();
  let url : string = 'https://api.postalpincode.in/pincode/' + picode
  return this.http.get(url)
}
}
