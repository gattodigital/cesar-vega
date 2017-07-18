import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
// import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import { AuthService } from "angular2-social-login";

declare const gapi: any;
@Component({
  selector: 'app-rateme',
  templateUrl: './rateme.component.html',
  styleUrls: ['./rateme.component.scss'],
  providers:[AuthService]
})
export class RatemeComponent implements OnInit {

private isAuth: boolean =false;
private result;

  constructor( private _auth: AuthService) { 
     
  }
  

  
  ratemeWithYelp() {  
    window.open("https://search.google.com/local/writereview?placeid=ChIJkf9pKF622YgRQUocI3HH7o4", "_blank");   
         window.open("https://www.yelp.com/writeareview/biz/jW4w0ZnUu-cLDSva3aaMnw?return_url=%2Fbiz%2FjW4w0ZnUu-cLDSva3aaMnw", "_blank");   
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
        return true} 
    )
  }

  // ratemeWithGoogle() {
  //        window.open("https://search.google.com/local/writereview?placeid=ChIJkf9pKF622YgRQUocI3HH7o4", "_blank");   
  //        this.afAuth.auth.signOut();
  //        this.isAuth = false;
  // }

 
  ngOnInit(): void {

    
    
  }

}
