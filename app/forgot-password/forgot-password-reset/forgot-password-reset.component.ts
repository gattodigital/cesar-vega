import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password-reset',
  templateUrl: './forgot-password-reset.component.html',
  styleUrls: ['./forgot-password-reset.component.scss']
})
export class ForgotPasswordResetComponent implements OnInit {
  private toggleMobile;
  private newpassword;
  private password;
  private username;
  private inputType = 'text';
  private showPwd : boolean = false;

  constructor() {
    this.toggleMobile = 'mobileLogo';
  }

  ngOnInit() {
    if (this.showPwd) {
       this.inputType = 'text'
    }else{
      this.inputType = 'password'
    }
  }

  resetPassword() {
    console.log('pws reset data : ' + this.newpassword +' new pwd : ' + this.password +' username : '+ this.username);
    
  }

}
