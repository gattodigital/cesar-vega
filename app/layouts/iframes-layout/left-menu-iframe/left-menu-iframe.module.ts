import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuIframeComponent } from './left-menu-iframe.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from "ng2-dragula";

@NgModule({
  declarations: [ LeftMenuIframeComponent ],
  imports: [ 
    CommonModule,
    RouterModule,
    FormsModule ,
    DragulaModule
    ],
  exports: [ LeftMenuIframeComponent ]
})
export class LeftMenuIframeModule { }
