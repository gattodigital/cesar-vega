import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCreatorComponent } from './form-creator.component';

const routes: Routes = [
  {
    path: '',
    component: FormCreatorComponent,
    data: {
      title: 'Form Creator'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormCreatorRoutingModule {}
