
import { Component,OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import {RegistrationService} from './Services/registrationservice/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public loginStatus;
  title = 'gfunds-frontend';
  hideElement = false;
  constructor(private router:Router, private regServ:RegistrationService){
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      console.log("sachiiiiiii",event.url.slice(),this.loginStatus);
      this.loginStatus = this.regServ.logState;
      if ((event.url.slice(0,10)== '/dashboard')||(event.url.slice(0,8)== '/foreman')) {
                this.hideElement = true;
      }
      else {
        this.hideElement = false;
      }
    }
  });
}
}



