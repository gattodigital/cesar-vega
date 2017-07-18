import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframesComponent } from "./iframes.component";
import { IframesRoutingModule } from "app/iframes/iframes-routing.module";
import { DragulaModule } from "ng2-dragula";
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    IframesRoutingModule,
    FormsModule,
    DragulaModule
  ],
  declarations: [IframesComponent]
})
export class IframesModule { }
