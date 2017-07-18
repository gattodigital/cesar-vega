import { NgModule} from '@angular/core';

import { RightMenuBrandLayoutComponent } from './rightMenu-brand-layout.component';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ng2-bootstrap/tabs';

@NgModule({
  declarations: [ RightMenuBrandLayoutComponent],
  imports: [ RouterModule, TabsModule],
  exports: [ RightMenuBrandLayoutComponent ]
})
export class RightMenuBrandLayoutModule { }
