import { NgModule} from '@angular/core';

import { SideNavToggleModule } from "app/side-nav-toggle/side-nav-toggle.module";
import { LeftMenuComponent } from './leftMenu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ LeftMenuComponent ],
  imports: [ RouterModule,FormsModule,SideNavToggleModule ],
  exports: [ LeftMenuComponent ]
})
export class LeftMenuModule { }
