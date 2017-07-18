import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  private toggleMobile;

   constructor() {
     this.toggleMobile = 'unsubscribeLogo';
  }

  ngOnInit() {
  }

  findAccount() {
  }

}
