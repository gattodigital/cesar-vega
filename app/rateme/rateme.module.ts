import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatemeRoutingModule } from './rateme-routing.module';
import { RatemeComponent } from './rateme.component';
import { Angular2SocialLoginModule } from "angular2-social-login";

let providers = {
    "google": {
      "clientId": "602575723314-jdm4nunt3bl3kts5pt422dkfoecdqi70.apps.googleusercontent.com"
    },
    "linkedin": {
      "clientId": "78boqsci07651u"
    },
    "facebook": {
      "clientId": "333641403720580",
      "apiVersion": "v2.9" //like v2.4 
    }
  };


@NgModule({
  imports: [
    CommonModule,
    RatemeRoutingModule,
    Angular2SocialLoginModule
  ],
  declarations: [RatemeComponent]
})
export class RatemeModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);