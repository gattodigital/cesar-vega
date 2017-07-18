import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';
import { AsideToggleDirective } from '../shared/aside.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SIDEBAR_TOGGLE_DIRECTIVES,AsideToggleDirective ],
  exports:[SIDEBAR_TOGGLE_DIRECTIVES,AsideToggleDirective ]
})
export class SideNavToggleModule { }
