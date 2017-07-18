import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login_RegisterComponent } from './login_Register.component';

const routes: Routes = [
  {
    path: '',
    component: Login_RegisterComponent,
    data: {
      title: 'log me'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Login_RegisterRoutingModule {}
