import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login_RegisterRoutingModule } from './login_Register-routing.module';
import { Login_RegisterComponent } from './login_Register.component';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ng2-bootstrap/modal';
import { ModalsComponent } from '../components/modals.component';
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
    FormsModule,
    ModalModule.forRoot(),
    Login_RegisterRoutingModule,
    Angular2SocialLoginModule
  ],
  declarations: [Login_RegisterComponent,ModalsComponent]
})
export class Login_RegisterModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);