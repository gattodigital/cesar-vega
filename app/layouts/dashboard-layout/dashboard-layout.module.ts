import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from './header/header.module';
import { LeftMenuModule } from './leftmenu/leftMenu.module';
import { RightMenuModule } from './rightmenu/rightMenu.module';

@NgModule({
  declarations:[],
  exports: [HeaderModule,FormsModule,CommonModule, LeftMenuModule, RightMenuModule]
})
export class DashboardLayoutModule { }
