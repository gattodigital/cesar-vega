import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderIframeModule } from './header-iframe/header-iframe.module';
import { RightMenuIframeModule } from './right-menu-iframe/right-menu-iframe.module';
import { LeftMenuIframeModule } from "./left-menu-iframe/left-menu-iframe.module";

@NgModule({
  declarations:[],
  exports: [HeaderIframeModule,FormsModule,CommonModule, LeftMenuIframeModule, RightMenuIframeModule]
})
export class IframesLayoutModule { }
