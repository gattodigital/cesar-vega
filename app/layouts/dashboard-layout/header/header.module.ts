import { NgModule} from '@angular/core';
import { HeaderComponent } from './header.component';
import { SideNavToggleModule } from "app/side-nav-toggle/side-nav-toggle.module";

@NgModule({
  imports:[SideNavToggleModule],
  declarations: [ HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }