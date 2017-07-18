import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatemeComponent } from './rateme.component';

const routes: Routes = [
  {
    path: '',
    component: RatemeComponent,
    data: {
      title: 'Rate-me'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatemeRoutingModule {}
