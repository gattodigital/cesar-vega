import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular2-social-login";

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent  {
  private toggleMobile ='';
  constructor( private _auth: AuthService) {
     this.toggleMobile = 'mobileLogo';
   }
 google(provider) {  
     this._auth.login(provider).subscribe(
      (data) => {
                  console.log(data);
                  //user data 
                  //name, image, uid, provider, uid, email, token (returns tokenId for google, accessToken for Facebook, no token for linkedIn) 
                }
    )
  }
  linkedin(provider) {  
     this._auth.login(provider).subscribe(
      (data) => {
                  console.log(data);
                  //user data 
                  //name, image, uid, provider, uid, email, token (returns tokenId for google, accessToken for Facebook, no token for linkedIn) 
                }
    )
  }
  facebook(provider) {  
     this._auth.login(provider).subscribe(
      (data) => {
                  console.log(data);
                  //user data 
                  //name, image, uid, provider, uid, email, token (returns tokenId for google, accessToken for Facebook, no token for linkedIn) 
                }
    )
  }
  logout(){
    this._auth.logout().subscribe(
      (data)=>{
        console.log(data);
        
      } 
    )
  }

}
