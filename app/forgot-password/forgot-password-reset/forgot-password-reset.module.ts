import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordResetComponent } from "./forgot-password-reset.component";
import { ForgotPasswordResetRoutingModule } from "./forgot-password-routing.module";
import { DragulaModule } from "ng2-dragula";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ForgotPasswordResetRoutingModule,
    DragulaModule,
    FormsModule
    
  ],
  declarations: [ForgotPasswordResetComponent]
})
export class ForgotPasswordResetModule { }
