import { Component, OnInit } from '@angular/core';
import { ForemanfileService } from '../../Services/foremanupload/foremanfile.service';
import { Router, RouterModule } from '@angular/router';
import { RegistrationService } from '../../Services/registrationservice/registration.service';



@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {


  constructor(public foremanser:ForemanfileService,public router:Router,private regService: RegistrationService) { }

public foremandetails:any = [{}];
public editable:any = {};
public edit:boolean=false;
public front_photo;
  ngOnInit() {
    this.foremanser.foremanprof().subscribe( backdata => {
      this.foremandetails = backdata;
       console.log("MMMMMMMMMMMM",this.foremandetails[0]['state']);
      //  console.log("MMMMMMMMMMMM2222222",this.foremandetails[0]['date_of_birth']);

       this.countryList = this.regService.countryList1;
this.count=this.foremandetails[0].state;
console.log("QQQQQQQQQQQQ",this.count)
this.change1Country();
    });

  }

  savedata(backdata){
    console.log("data in componenttttttttttt",backdata);
    this.foremanser.foremanedit(backdata).subscribe(backdata => {
      console.log("alerttttttttttt",backdata)
      this.edit=!(this.edit);
      this.foremanser.updateProfilePic = "update";
      this.router.navigate(['Adminhomepage']);
  });}
  public countryList: any ;
  count;
  cities: Array<any>;

   change1Country() {
    console.log("rrrrrrrrrr",this.count)
    this.count=this.foremandetails[0].state;
  this.cities = this.countryList.find(con => con.name == this.count).cities;
  }




public foreman;
  foremanpic(event){
    console.log("dddddddddddd", event.target.files[0]);
    this.foreman = event.target.files[0];
  }

  foremanimage(){
    const ffd = new FormData();
    ffd.append("fpic", this.foreman);
     this.foremanser.updateformanpic(ffd).subscribe(data =>{
      console.log(data);

  });

}
}
