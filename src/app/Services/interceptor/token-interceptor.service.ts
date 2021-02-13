import { Injectable,Injector} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import { RegistrationService } from '../../Services/registrationservice/registration.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req,next){
      let regservice= this.injector.get(RegistrationService)
      let tokenizedReq=req.clone({
          setHeaders:{
              Authorization:`${regservice.getToken()}`
          }
      })
      return next.handle(tokenizedReq)
  }
}
