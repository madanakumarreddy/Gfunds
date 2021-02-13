import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ForemanfileService {


public viewdetails;

private chitidSource = new BehaviorSubject(0);
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
   currentchit = this.chitidSource.asObservable();
public adt;
  public auctiontransdata;
  public getmembertransdata;
  public MyProfile;

  constructor(private http: HttpClient) { }
changeMessage(message: any) {
    this.messageSource.next(message)
  }
  sendchitid(message: any) {
    this.messageSource.next(message)
  }

  private baseUrl = environment.base_url;


  fileOfAdress(addresfile):Observable <any> {
    console.log("adresssssssssssss",addresfile);
    let url:string =`${this.baseUrl}/fileadressupload/`
    return this.http.post(url,addresfile);
}
createnewchit(data):Observable<any>{
  console.log("daaa in service",data);
  let url:string=`${this.baseUrl}/newchit/`;
  return this.http.post(url,data)
}

addedmembers(data):Observable<any>{
   let url:string=`${this.baseUrl}/addedmembers/`;
  return this.http.post(url,data)
}
runningforemandetails(data):Observable<any>{
    let url:string=`${this.baseUrl}/graphdetails/`;
  return this.http.post(url,data)
}
addreq(data):Observable<any>{
  console.log("daaa in service",data);
  let url:string=`${this.baseUrl}/membersadd/`;
  return this.http.post(url,data)
}

foreclosedchits():Observable<any>{
    let url:string = `${this.baseUrl}/foremanclosedchits/`
    return this.http.get(url);
}

aucdate(obj):Observable<any>{
  let url:string = `${this.baseUrl}/auctionupdate/`
  return this.http.post(url,obj)
}


approvetans(data):Observable<any>{
  let url:string = `${this.baseUrl}/approvetrans/`
  return this.http.post(url,data)
}
approvedeptans(data):Observable<any>{
  let url:string = `${this.baseUrl}/runningtransapprove/`
  return this.http.post(url,data)
}
forfinalreg(userser):Observable<any>{
  console.log("servvvvvvvvv user",userser);
  let url:string = `${this.baseUrl}/foremanfinalregister/`
  return this.http.post(url,userser)
}

foremanrequestedchits():Observable<any>{
  let url:string = `${this.baseUrl}/foremanrequestedchits/`
  return this.http.get(url)
}


addmembers(data):Observable<any>{
  let url:string = `${this.baseUrl}/foremanrequest/`
  return this.http.post(url,data) 
}
foremanprof():Observable<any>{
  let url:string = `${this.baseUrl}/foremanview/`
  return this.http.get(url)
}

foremanedit(data):Observable <any>{
  console.log("dataaaa in serviceeeeeeeeee",data)
  let url:string = `${this.baseUrl}/editforeman/`
  return this.http.post(url,data)

}
memberreject(data):Observable <any>{
  console.log("dataaaa in serviceeeeeeeeee",data)
  let url:string = `${this.baseUrl}/addedmembers/`
  return this.http.post(url,data)

}
setauctiondate(data):Observable <any>{
  let url:string = `${this.baseUrl}/auctiondate/`
  return this.http.post(url,data);
}

runningchits1():Observable <any>{
  let url:string = `${this.baseUrl}/foremanhome/`
  return this.http.get(url);
}

MemDetails(data):Observable <any>{
  let url:string = `${this.baseUrl}/Member_Chit_Details/`
  return this.http.post(url,data);
}
runfund():Observable <any>{
  let url:string = `${this.baseUrl}/foremanrunning/`;
  return this.http.get(url)
}
getfdpic():Observable <any>{
  let url:string = `${this.baseUrl}/getupload/`
  return this.http.get(url)
}
memberauctiontrans(data):Observable<any>{
  console.log("serviceeeeeee",data)
  let url:string = `${this.baseUrl}/membertransid/`
  return this.http.post(url,data)
}

retrievetransactions(data):Observable<any>{
  let url:string = `${this.baseUrl}/auctiontransactionhistory/`
  return this.http.post(url,data)
  console.log("dataaaaaaa33333333333333333",data);
}
rtmpreloan(data):Observable<any>{
  let url:string = `${this.baseUrl}/Newloan/`
  return this.http.post(url,data)
}
foremangraph(data){
  let url:string = `${this.baseUrl}/detailsgraph/`
  return this.http.post(url,data)

}

uploadfdcopy(data):Observable<any>{
   let url:string = `${this.baseUrl}/govtcopy/`
  return this.http.post(url,data)


}
closedgraphdetails1(data){
  console.log("AAAAAAAAAAAAAAAAAAAAAAAA",data);
  let url:string = `${this.baseUrl}/graphdetails/`
  return this.http.post(url,data);
}
viewProf(data):Observable<any>{
  console.log("in serrrrrrrrrrrrrrr",data);
   let url:string = `${this.baseUrl}/memdetails/`
  return this.http.post(url,data)

}
updateformanpic(data):Observable<any>{
   let url:string = `${this.baseUrl}/foremanpic/`
  return this.http.post(url,data)


}

saveTran(data):Observable<any>{
  let url:string = `${this.baseUrl}/saveTransaction/`
  return this.http.post(url,data)
}

 Profilepic(){
      let url:string = `${this.baseUrl}/profiledp/`
      return this.http.get(url)

  }

  getForemanPic():Observable<any>{
  let url:string = `${this.baseUrl}/getForemanPic/`
  return this.http.get(url)
}

updateForemanScore(){
  let data = {"msg":"update score"}
  let url: string = `${this.baseUrl}/updateForemanScore/`;
  return this.http.post(url,data);
}

public updateProfilePic:string = "noUpdate";

foremandetails(data){
  let url: string = `${this.baseUrl}/foremanfinalregister/`;
  return this.http.post(url,data);

}


}


