import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { FormCreatorLayoutComponent } from './layouts/form-creator-layout/form-creator-layout.component';
import { MasterLayoutComponent } from './layouts/master-layout.component';
import { LoginComponent } from './pages/login.component';
import { Login_RegisterModule } from './login_Register/login_Register.module';

import { ChatLayoutComponent } from './layouts/chat-layout.component';
import { DashboardLayoutComponent } from "./layouts/dashboard-layout/dashboard-layout.component";
import { IframesLayoutComponent } from "./layouts/iframes-layout/iframes-layout.component";
import { BrandLayoutComponent } from "app/layouts/brand-layout/brand-layout.component";
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login_Register',
    pathMatch: 'full',
  },
   {
    path: '',
    component: MasterLayoutComponent,
    data: {
      title: 'seed'
    },
    children: [
      {
        path: 'seed',
        loadChildren: './seed/seed.module#SeedModule'
      }
    ]
  },
   {
    path: '',
    component: SimpleLayoutComponent,
    data: {
      title: 'people'
    },
    children: [
      {
        path: 'people',
        loadChildren: './people/people.module#PeopleModule'
      }
    ]
  },
   {
    path: '',
    component: FormCreatorLayoutComponent,
    data: {
      title: 'form-creator'
    },
    children: [
      {
        path: 'form-creator',
        loadChildren: './form-creator/form-creator.module#FormCreatorModule'
      }
    ]
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'forms',
        loadChildren: './forms/forms.module#FormsModule'
      },
      {
        path: 'plugins',
        loadChildren: './plugins/plugins.module#PluginsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'uikits',
        loadChildren: './uikits/uikits.module#UIKitsModule'
      }
    ]
  },
  {
    path: 'rateme',
    component: ChatLayoutComponent,
    data: {
      title: 'rateme'
    },
    children: [
      {
        path: '',
        loadChildren: './rateme/rateme.module#RatemeModule',
      }
    ]
  },
  {
    path: 'login_Register',
    component: ChatLayoutComponent,
    data: {
      title: 'login Register'
    },
    children: [
      {
        path: '',
        loadChildren: './login_Register/login_Register.module#Login_RegisterModule',
      }
    ]
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    // component: ChatLayoutComponent,
    data: {
      title: 'forgot password'
    },
    children: [
      {
        path: 'forgotpassword',
        loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule',
      },
      {
        path: 'forgotpasswordreset',
        loadChildren: './forgot-password/forgot-password-reset/forgot-password-reset.module#ForgotPasswordResetModule',
      }
    ]
  },
  {
    path: 'iframes',
    component: IframesLayoutComponent,
    data: {
      title: 'iframes'
    },
    children: [
      {
        path: '',
        loadChildren: './iframes/iframes.module#IframesModule',
      }
    ]
  },
  {
    path: 'brandapp',
    component: BrandLayoutComponent,
    data: {
      title: 'Brand Social'
    },
    children: [
      {
        path: '',
        loadChildren: './brand-social/brand-social.module#BrandSocialModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
