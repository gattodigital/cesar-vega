import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeedComponent }  from './seed.component';

const routes: Routes = [
  {
    path: '',
    component: SeedComponent,
    data: {
      title: 'seed'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeedRoutingModule {}
