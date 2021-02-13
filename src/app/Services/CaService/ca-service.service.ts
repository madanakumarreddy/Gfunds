import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CaServiceService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.base_url;

  cachits():Observable<any>{
    let url:string = `${this.baseUrl}/ca_groups/`
    return this.http.get(url)
  }

  getcompletedauctions(data){
  	 let url:string = `${this.baseUrl}/get_auctioncount/`
    return this.http.post(url,data);

  }
}
