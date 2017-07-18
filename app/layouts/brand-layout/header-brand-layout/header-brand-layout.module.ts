import { NgModule} from '@angular/core';
import { HeaderBrandLayoutComponent } from './header-brand-layout.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../../../shared/sidebar.directive';
import { AsideToggleDirective } from '../../../shared/aside.directive';
import { SideNavToggleModule } from "app/side-nav-toggle/side-nav-toggle.module";

@NgModule({
  imports:[SideNavToggleModule],
  declarations: [ HeaderBrandLayoutComponent],
  exports: [HeaderBrandLayoutComponent]
})
export class HeaderBrandLayoutModule { }