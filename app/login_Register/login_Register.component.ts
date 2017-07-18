import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from "angular2-social-login";
import { SharedService } from '../shared/shared.service';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login_Register',
  templateUrl: './login_Register.component.html',
  styleUrls: ['./login_Register.component.scss'],
  providers: [AuthService, AngularFireAuth, AngularFireDatabase]
})
export class Login_RegisterComponent {

  private userName: string = '';
  private password: string = '';
  private isAuth: boolean = false;
  private result;
  private SVGDocument = null;
  private SVGRoot = null;
  private username = '';
  private pointerevents = 'none';
  private animationState = 'paused';
  private animationState2 = 'pause, running';
  private plyaTime = false;
  private loginMessage = false;
  private loginErrorMsg = '';


  private TrueCoords = null;
  private GrabPoint = null;
  private BackDrop = null;
  private DragTarget = null;
  private flag = false;

  private selectedElement: any = 0;
  private currentX = 0;
  private currentY = 0;
  private currentMatrix: any = 0;
  private mousedown: any = false;
  private displayBadge: any = true;
  private isSelected: any;
  private cy: any;
  private cx: any;
  private svgService: any;


  private toggleMobile = '';
  constructor(private _auth: AuthService, private router: Router, private _sharedService: SharedService) {
    this.toggleMobile = 'mobileLogo';
    this.displayBadge = true;
  }

  signInAndRegistrationAuth(provider: string) {
   
    if (provider === 'login') {
      this._sharedService.signInAndRegistrationAuth("'" + this.userName + "','" + this.password + "'").subscribe(
        data => {
          if (data[0].verified === 'True') {
            this.router.navigateByUrl('/dashboard');
          } else {
            this.loginMessage = true;
            this.loginErrorMsg = data[0].message;
          }
        },
        err => {
          console.log(err);
        });
      // 
    } else if (provider === 'email') {
      localStorage.clear(); 
      this.router.navigateByUrl('/form-creator');
    } else {
      this._auth.login(provider).subscribe(
        (data: any) => {
          this._sharedService.signInAndRegistrationAuth("'" + data.email + "','" + data.password + "'").subscribe(
            auth => {//name, image, uid, provider, uid, email, token (returns tokenId for google, accessToken for Facebook, no token for linkedIn) 
              if (auth[0].verified === 'True') {
                this.router.navigateByUrl('/dashboard');
              } else {                
                this.router.navigateByUrl('/form-creator');
                localStorage.setItem('userSocialMediaData',JSON.stringify(data));
              }
            },
            err => {
              console.log(err);
            });
        },
        err =>
          console.log('login error: ' + err))
    }
  }

  logout() {
    this._auth.logout().subscribe(
      (data) => {
        console.log(data);

      }
    )
  }
  ng

  forgotPassword(){
     this.router.navigateByUrl('/forgotpassword');
  }

  animateToggle() {
    if (this.animationState === 'paused') {
      this.animationState = 'running'
      this.plyaTime = true;
    } else {
      this.animationState = 'paused'
      this.plyaTime = false;
    }
  }

  grab(evt) {

    // var targetElement = document.getElementById('robotbi');

    // // you cannot drag the background itself, so ignore any attempts to mouse down on it

    // //set the item moused down on as the element to be dragged
    // this.DragTarget = targetElement;

    // // move this element to the "top" of the display, so it is (almost)
    // //    always over other elements (exception: in this case, elements that are
    // //    "in the folder" (children of the folder group) with only maintain
    // //    hierarchy within that group
    // this.DragTarget.parentNode.appendChild(this.DragTarget);

    // // turn off all pointer events to the dragged element, this does 2 things:
    // //    1) allows us to drag text elements without selecting the text
    // //    2) allows us to find out where the dragged element is dropped (see Drop)
    // // this.DragTarget.setAttributeNS(null, 'pointer-events', 'none');

    // // we need to find the current position and translation of the grabbed element,
    // //    so that we only apply the differential between the current location
    // //    and the new location
    // var transMatrix = this.DragTarget.getCTM();
    // this.GrabPoint.x = evt.x ;
    // this.GrabPoint.y =  evt.y ;
    // this.GrabPoint.x = this.TrueCoords.x - Number(transMatrix.e);
    // this.GrabPoint.y = this.TrueCoords.y - Number(transMatrix.f);
    // this.mousedown = true;
    //  document.getElementById('robotbi').setAttributeNS(null, 'transform', 'translate(' +  evt.x + ',' +  evt.y + ')');
    // console.log('mousedown');


  }
  drag(evt) {
    this.displayBadge = true;
    // // account for zooming and panning
    // if ( this.mousedown) {

    // this.GetTrueCoords(evt);

    // // if we don't currently have an element in tow, don't do anything
    // if (document.getElementById('robotbi')) {
    //   // account for the offset between the element's origin and the
    //   //    exact place we grabbed it... this way, the drag will look more natural
    //   var newX = evt.x ;
    //   var newY = evt.y;
    //   // var newX = this.TrueCoords.x - this.GrabPoint.x;
    //   // var newY = this.TrueCoords.y - this.GrabPoint.y;

    //   // apply a new tranform translation to the dragged element, to display
    //   //    it in its new location
    //   document.getElementById('robotbi').setAttributeNS(null, 'transform', 'translate(' +  newX + ',' +  newY + ')');
    // }

    //  this.mousedown = true
    // }
  }

  leave(evt) {
    this.displayBadge = true;
    // // account for zooming and panning
    // if ( this.mousedown) {

    // this.GetTrueCoords(evt);

    // // if we don't currently have an element in tow, don't do anything
    // if (document.getElementById('robotbi')) {
    //   // account for the offset between the element's origin and the
    //   //    exact place we grabbed it... this way, the drag will look more natural
    //   var newX = evt.x ;
    //   var newY = evt.y;
    //   // var newX = this.TrueCoords.x - this.GrabPoint.x;
    //   // var newY = this.TrueCoords.y - this.GrabPoint.y;

    //   // apply a new tranform translation to the dragged element, to display
    //   //    it in its new location
    //   document.getElementById('robotbi').setAttributeNS(null, 'transform', 'translate(' +  newX + ',' +  newY + ')');
    // }

    //  this.mousedown = true
    // }
  }
  drop(evt) {
    // if we aren't currently dragging an element, don't do anything
    // if (document.getElementById('robotbi')) {
    //   // since the element currently being dragged has its pointer-events turned off,
    //   //    we are afforded the opportunity to find out the element it's being dropped on
    //   var targetElement : any = document.getElementById('robotbi');

    //   // turn the pointer-events back on, so we can grab this item later
    //   this.DragTarget.setAttributeNS(null, 'pointer-events', 'all');
    //   if ('Folder' == targetElement.parentNode.id) {
    //     // if the dragged element is dropped on an element that is a child
    //     //    of the folder group, it is inserted as a child of that group
    //     targetElement.parentNode.appendChild(this.DragTarget);
    //     alert(this.DragTarget.id + ' has been dropped into a folder, and has been inserted as a child of the containing group.');
    //   }
    //   else {
    //     // for this example, you cannot drag an item out of the folder once it's in there;
    //     //    however, you could just as easily do so here
    //     alert(this.DragTarget.id + ' has been dropped on top of ' + targetElement.id);
    //   }

    //   // set the global variable to null, so nothing will be dragged until we
    //   //    grab the next element
    //   this.DragTarget = null;
    //    this.mousedown = false;
    // }
  }
  GetTrueCoords(evt) {
    // find the current zoom level and pan setting, and adjust the reported
    //    mouse position accordingly
    var newScale = this.SVGRoot.currentScale;
    var translation = this.SVGRoot.currentTranslate;
    this.TrueCoords.x = (evt.clientX - translation.x) / newScale;
    this.TrueCoords.y = (evt.clientY - translation.y) / newScale;
  }
  // other
  mouseDown(event: Event) {
    console.log('mouse down' + event);
    this.isSelected = true;
  }
  mouseMove(event: MouseEvent) {
    if (!this.isSelected) {
      return;
    }


    // // account for zooming and panning
    if (this.mousedown) {

      this.GetTrueCoords(event);

      // if we don't currently have an element in tow, don't do anything

      // account for the offset between the element's origin and the
      //    exact place we grabbed it... this way, the drag will look more natural
      // var newX = evt.x ;
      // var newY = evt.y;
      var newX = this.TrueCoords.x - this.GrabPoint.x;
      var newY = this.TrueCoords.y - this.GrabPoint.y;

      // apply a new tranform translation to the dragged element, to display
      //    it in its new location
      document.getElementById('robotbi').setAttributeNS(null, 'transform', 'translate(' + newX + ',' + newY + ')');
    }


    // console.log('mouse move ' + JSON.stringify(event));
    // var x = event.clientX;     // Get the horizontal coordinate
    // var y = event.clientY;
    // this.cx = x*2;
    // this.cy = y*2;
    //  document.getElementById('robotbi').setAttributeNS(null, 'transform', 'translate(' + x + ',' + y + ')');
  }
  mouseUp(event) {
    console.log('mouse leave ' + event);
    this.isSelected = false;
  }
}
