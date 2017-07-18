import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from "app/forgot-password/forgot-password.component";
import { ForgotPasswordRoutingModule } from "./forgot-password-routing.module";
import { DragulaModule } from "ng2-dragula";
import { FormsModule } from '@angular/forms';
import { ForgotPasswordResetComponent } from "./forgot-password-reset/forgot-password-reset.component";
import { ForgotPasswordResetRoutingModule } from "./forgot-password-reset/forgot-password-routing.module";


@NgModule({
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    DragulaModule,
    FormsModule
  ],
  declarations: [ForgotPasswordComponent]
})

export class ForgotPasswordModule {
 }
