import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../dashboard-layout/header/header.module';
import { LeftMenuModule } from '../dashboard-layout/leftmenu/leftMenu.module';
import { RightMenuModule } from '../dashboard-layout/rightmenu/rightMenu.module';

@NgModule({
  declarations:[],
  exports: [HeaderModule,FormsModule,CommonModule, LeftMenuModule, RightMenuModule]
})
export class formCreatorLayoutModule { }
