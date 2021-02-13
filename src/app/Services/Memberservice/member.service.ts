import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject} from 'rxjs';
import {environment} from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MemberService {
    private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(public http:HttpClient) { }
 changeMessage(message: any) {
    this.messageSource.next(message)
  }
  private baseUrl = environment.base_url;

  public fundpopdata:any = {};
  public reqfund:any = {}
public depFDcopy;
 public chitgovtcopy;
public bidauction;
public graphdata;
public requestpopshow;
public memdatatrans;
public memcount;
public runninggraph;
public AuctionPOpUp;
sunn;
fundcount;
fundtransact;


presentAddresfile(datafrmcom):Observable <any> {
	console.log("data in serrrrrrrrr",datafrmcom);
	let url:string=`${this.baseUrl}/memberdocs/`
	return this.http.post(url,datafrmcom)
}

memtrans(data):Observable <any> {
	console.log("data in serrrrrrrrr",data);
	let url:string=`${this.baseUrl}/transactiondata/`
	return this.http.post(url,data)
	}


	 Profilepic(){
      let url:string = `${this.baseUrl}/profiledp/`
      return this.http.get(url)

  }

transDetail(data):Observable <any> {
	console.log("data in serrrrrrrrr",data);
	let url:string=`${this.baseUrl}/transactiondata/`
	return this.http.post(url,data)
}

sendchitrequest(data):Observable<any>{
	let url:string = `${this.baseUrl}/requesttoforeman/`
	return this.http.post(url,data);
}
graphdetails():Observable<any>{
    let url:string = `${this.baseUrl}/memberhome/`
    return this.http.get(url);
}

requestedfunds(){
	let url:string = `${this.baseUrl}/requestedfund/`
	return this.http.get(url);
}

viewprofile(){
	let url:string = `${this.baseUrl}/viewmemberprofile/`
	return this.http.get(url);
}


memberviewedit(data):Observable<any>{
	let url:string = `${this.baseUrl}/editmemberprofile/`
	return this.http.post(url,data);
}
memberrunninglist():Observable<any>{
    let url:string = `${this.baseUrl}/runningmemberlist/`
    return this.http.get(url);
}
closedchits():Observable<any>{
    let url:string = `${this.baseUrl}/closedchits/`
    return this.http.get(url);
}
runningdetails(data):Observable<any>{
	let url:string = `${this.baseUrl}/runningdetail/`
	return this.http.post(url,data)
}

checkactiontime(data):Observable<any>{
	console.log('daaaaaaataaaaaa',data);
    let url:string = `${this.baseUrl}/timeaction/`
    return this.http.post(url,data)
}
auctionamount(data):Observable<any>{
	let url:string = `${this.baseUrl}/savebid/`
	return this.http.post(url,data)
}

getauctionlist(data){
	let url:string = `${this.baseUrl}/getlist/`
	return this.http.post(url,data)
}
auctiontimeget(data){
    let url:string = `${this.baseUrl}/timeaction/`
    return this.http.post(url,data)
}

finalaction(data){
    let url:string = `${this.baseUrl}/checkfinalaction/`
    return this.http.post(url,data)
}

fetchauctiondetails(){
	let url:string = `${this.baseUrl}/auctionhistory/`
	return this.http.get(url);
}

getFundDetails(){
	let url:string = `${this.baseUrl}/fundHistory/`
	return this.http.get(url);
}
RaiseGoldLoan(data){
	console.log("raiseeeeSiva!@@@@@@@@@!!!!!!!!!!!!",data)
	let url:string = `${this.baseUrl}/Newloan/`
	return this.http.post(url,data);
}

updatepicture(data){

	let url:string = `${this.baseUrl}/picupdate/`
	return this.http.post(url,data);
}

closedgraphdetails(data){
	console.log("AAAAAAAAAAAAAAAAAAAAAAAA",data);
	let url:string = `${this.baseUrl}/getClosedGrap/`
	return this.http.post(url,data);
}


getParticularTrans(data){
	let url:string = `${this.baseUrl}/getParticularTransaction/`
	return this.http.post(url,data);
}

public updateProfilePic:string = "noUpdate";

newmemebermes(){
	let url:string = `${this.baseUrl}/mesfornewmem/`
	return this.http.get(url);

}

statusForMemGraph(){
	let url:string = `${this.baseUrl}/statusForMemGraph/`
	return this.http.get(url);
}


}
