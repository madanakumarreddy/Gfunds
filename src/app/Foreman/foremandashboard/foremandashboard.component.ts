import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { RegistrationService } from '../../Services/registrationservice/registration.service';
import {ForemanfileService} from '../../Services/foremanupload/foremanfile.service';

declare var $: any;

@Component({
  selector: 'app-foremandashboard',
  templateUrl: './foremandashboard.component.html',
  styleUrls: ['./foremandashboard.component.css']
})
export class ForemandashboardComponent implements OnInit {

  constructor(private router: Router, 
              public registerSe:RegistrationService,
              public reg:ForemanfileService) { }
logout1(){
      console.log("hiiiiiiiiiiiiiiiii");
      localStorage.clear();
      this.router.navigate(['/login']);
  }

public userprofile;
public ForemanPic;
  ngOnInit() {
this.profilePic();
this.userprofile = this.registerSe.showprofilepic;
this.ForemanPic = this.reg.MyProfile;
console.log("FOREMANNNNNNPICCCCCCCCCCCCCCCCCC",this.ForemanPic);



     this.userprofile = this.registerSe.showprofilepic;
    
      console.log("wwwwwwwww2222222",this.userprofile)


    $(document).ready(function() {

      var active1 = false;
      var active2 = false;
      var active3 = false;
      var active4 = false;
      var active5 = false;
      $('[data-toggle="tooltip"]').tooltip();

      $('.parent2').on('click', function() {
          console.log("--------------clicked----------")


          if (!active1) $(this).find('.test1').css({
              'transform': 'translate(-12px, 60px)'
          });
          else $(this).find('.test1').css({
              'transform': 'translate(-15px, -12px)'

          });




          if (!active2) $(this).find('.test2').css({
              'transform': 'translate(-12px, 130px)'
          });
          else $(this).find('.test2').css({
              'transform': 'translate(-15px, -12px)'
          });
          if (!active4) $(this).find('.test4').css({
              'transform': 'translate(-12px, 200px)'
          });
          else $(this).find('.test4').css({
              'transform': 'translate(-15px, -12px)'
          });
          if (!active5) $(this).find('.test5').css({
              'transform': 'translate(-12px, 270px)'
          });
          else $(this).find('.test5').css({
              'transform': 'translate(-15px, -12px)'
          });
          active1 = !active1;
          active2 = !active2;

          active4 = !active4;
          active5 = !active5;

      });
  });

  }
public data;
public image : File =null;
profilePic(){
  console.log("Profile picture")
  this.reg.getForemanPic().subscribe(
   backres => {
    console.log("got the picture",backres)
    this.data = backres
    this.image = this.data.front_pic;
   }
  )

}

closemenu(){
  $(document).on('click',function(){
    $(' .collapse').collapse('hide');
  })

}



}
