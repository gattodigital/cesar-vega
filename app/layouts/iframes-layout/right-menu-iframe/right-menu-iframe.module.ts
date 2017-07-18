import { NgModule} from '@angular/core';

import { RightMenuIframeComponent } from './right-menu-iframe.component';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ng2-bootstrap/tabs';

@NgModule({
  declarations: [ RightMenuIframeComponent],
  imports: [ RouterModule, TabsModule],
  exports: [ RightMenuIframeComponent ]
})
export class RightMenuIframeModule { }
