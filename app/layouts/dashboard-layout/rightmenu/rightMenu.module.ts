import { NgModule} from '@angular/core';

import { RightMenuComponent } from './rightMenu.component';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ng2-bootstrap/tabs';

@NgModule({
  declarations: [ RightMenuComponent],
  imports: [ RouterModule, TabsModule],
  exports: [ RightMenuComponent ]
})
export class RightMenuModule { }
