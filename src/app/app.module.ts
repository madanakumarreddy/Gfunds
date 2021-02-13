import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { RegistrationService } from './Services/registrationservice/registration.service'
import { TokenInterceptorService } from './Services/interceptor/token-interceptor.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent,popupdetails,transactionpopup } from './Registration/login/login.component';
// import { MemberfinalregistrationComponent, memberfinalregistrationExample, unmaried, divorce, nomineesrelation, nomineesage, nomineesname,shopowner,salariedemployee,governmentjob,residential_status,SmallBusiness,Twowheeler,
// Loandetails,residential_status1,Fourwheeler,Fourbankdetails,Personalloan,Personalbankdetails,Homeloan,Homeloanbankdetails,Anyother,Anyotherbankdetails,permanenthouse} from './Registration/memberfinalregistration/memberfinalregistration.component';
// import { MemberfinalregistrationComponent } from './Registration/memberfinalregistration/memberfinalregistration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { HeaderComponent, SignupPop } from './shared/header/header.component';
import { FooterComponent ,Privacypolicy,Termsconditions,Faq} from './shared/footer/footer.component';
import { HomeComponent } from './Registration/home/home.component';
import { ForgotpasswordComponent } from './Registration/forgotpassword/forgotpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HomeupcomingfundsComponent } from './Registration/homeupcomingfunds/homeupcomingfunds.component';
import { UpcomingfundsComponent } from './Memberdashboard/upcomingfunds/upcomingfunds.component';
import { FraternityfundComponent } from './Registration/fraternityfund/fraternityfund.component';
import { TransactionsComponent } from './Foreman/transactions/transactions.component';
import { DatePipe } from '@angular/common';
import { ForemanfileService } from './Services/foremanupload/foremanfile.service';
import { HomerunningfundsComponent } from './Registration/homerunningfunds/homerunningfunds.component';
import { FilterPipe } from './FilterPipe/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // MemberfinalregistrationComponent,
    // memberfinalregistrationExample,
    HeaderComponent,SignupPop,
    FooterComponent,
    HomeComponent,
    ForgotpasswordComponent,
    // unmaried,
    // divorce,
    // nomineesrelation,
    // nomineesage,
    // nomineesname,
    // SmallBusiness,
    // shopowner,
    // salariedemployee,
    // governmentjob,
    // Twowheeler,
    // Loandetails,
    // Fourwheeler,
    // Fourbankdetails,
    // Personalloan,
    // Homeloan,
    // Homeloanbankdetails,
    // Personalbankdetails,
    // Anyother,
    // Anyotherbankdetails,
    // residential_status,
    // residential_status1,
    Privacypolicy,
    Termsconditions,
    Faq,
    HomeupcomingfundsComponent,
    FraternityfundComponent,
    // permanenthouse, 
    popupdetails,
    transactionpopup,
    HomerunningfundsComponent,
    
    
    
  ],
  entryComponents: [
    AppComponent,
    LoginComponent,
    // memberfinalregistrationExample,
    HeaderComponent,SignupPop,
    FooterComponent,
    HomeComponent,
    ForgotpasswordComponent,
    // unmaried,
    // divorce,
    // nomineesrelation,
    // nomineesage,
    // nomineesname,
    // SmallBusiness,
    // shopowner,
    // salariedemployee,
    // governmentjob,
    // Twowheeler,
    // Loandetails,
    // Fourwheeler,
    // Personalloan,
    // Anyother,
    // Anyotherbankdetails,
    // Personalbankdetails,
    // Homeloan,
    // Homeloanbankdetails,
    // Fourbankdetails,
    // residential_status,
    // residential_status1,
    Privacypolicy,
    Termsconditions,
    Faq,
    // permanenthouse,
    popupdetails,
    transactionpopup,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    OverlayModule,
    NgxPaginationModule

    ],

  exports: [MaterialModule],

  providers: [ForemanfileService,DatePipe,RegistrationService,{
      provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true
  }],

  bootstrap: [AppComponent]
})

export class AppModule { }
