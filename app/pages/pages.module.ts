import { NgModule } from '@angular/core';

import { p404Component } from './404.component';
import { p500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { PagesRoutingModule } from './pages-routing.module';
// import { Angular2SocialLoginModule } from "angular2-social-login";

// let providers = {
//   "google": {
//     "clientId": "602575723314-jdm4nunt3bl3kts5pt422dkfoecdqi70.apps.googleusercontent.com"
//   },
//   "linkedin": {
//     "clientId": "78boqsci07651u"
//   },
//   "facebook": {
//     "clientId": "333641403720580",
//     "apiVersion": "v2.9" //like v2.4 
//   }
// };

@NgModule({
  imports: [
    PagesRoutingModule,
    // Angular2SocialLoginModule
  ],
  declarations: [
    p404Component,
    p500Component,
    RegisterComponent,
    LoginComponent
  ]
})
export class PagesModule { }

// Angular2SocialLoginModule.loadProvidersScripts(providers);