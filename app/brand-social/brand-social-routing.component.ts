import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandSocialComponent } from "./brand-social.component";

const routes: Routes = [
  {
    path: '',
    component: BrandSocialComponent,
    data: {
      title: 'Brand Social'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandSocialRoutingModule {}
