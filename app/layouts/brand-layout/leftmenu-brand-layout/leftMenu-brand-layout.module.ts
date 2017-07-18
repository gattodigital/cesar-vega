import { NgModule} from '@angular/core';

import { LeftMenuBrandLayoutComponent } from './leftMenu-brand-layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ LeftMenuBrandLayoutComponent ],
  imports: [ RouterModule,FormsModule ],
  exports: [ LeftMenuBrandLayoutComponent ]
})
export class LeftMenuBrandLayoutModule { }
