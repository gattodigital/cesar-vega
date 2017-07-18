import { NgModule} from '@angular/core';
import { HeaderIframeComponent } from './header-iframe.component';
import { SideNavToggleModule } from "app/side-nav-toggle/side-nav-toggle.module";
@NgModule({
  imports:[SideNavToggleModule],
  declarations: [ HeaderIframeComponent],
  exports: [HeaderIframeComponent]
})
export class HeaderIframeModule { }