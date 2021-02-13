import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { RegistrationService } from '../../Services/registrationservice/registration.service';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private router: Router, public registerSe:RegistrationService) { }
  logout(){
      this.registerSe.logState = false;
      console.log("hiiiiiiiiiiiiiiiii");
      localStorage.clear();
      this.router.navigate(['/login']);
  }
public userprofile;
prof;
public Profile;
  ngOnInit() {
      this.profiledata();
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
        // $(this).find('.parent2').css({
        //     'display': 'block',
        //     'margin-top': '50px',
        //     'right':'0',
        //     'width': '300px',
        //     'height': '500px'

        // });
        if (!active1) $(this).find('.test1').css({
            'transform': 'translate(-12px, 60px)'
        });
        else $(this).find('.test1').css({
            'transform': 'translate(-15px, -12px)'

        });


        // if (!active2) $(this).find('.test2').css({
        //     'transform': 'translate(-12px, 120px)'
        // });


        // else $(this).find('.test2').css({
        //     'transform': 'translate(-15px, -12px)'
        // });

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
        // active3 = !active3;
        active4 = !active4;
        active5 = !active5;
        // active6 = !active6;
    });
});

this.Profile = this.registerSe.MyProfile;
console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPP",this.Profile);
  }

public profil: File = null;
profiledata() {
    console.log("HHHHHHHHHHHHHHHHHHHHHH")
    this.registerSe.profiledata2().subscribe(backResponse => {
      this.profil = backResponse.profile_photo;
      console.log("response", backResponse)
    },
      error => console.log("erroorrrr", error)
    );
  }

  closemenu(){
    $(document).on('click',function(){
      $(' .collapse').collapse('hide');
    })
  }

}
