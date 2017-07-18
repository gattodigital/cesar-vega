import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderBrandLayoutModule } from './header-brand-layout/header-brand-layout.module';
import { LeftMenuBrandLayoutModule } from './leftmenu-brand-layout/leftMenu-brand-layout.module';
import { RightMenuBrandLayoutModule } from './rightmenu-brand-layout/rightMenu-brand-layout.module';

@NgModule({
  declarations:[],
  exports: [FormsModule,CommonModule,HeaderBrandLayoutModule, LeftMenuBrandLayoutModule, RightMenuBrandLayoutModule]
})
export class BrandLayoutModule { }
