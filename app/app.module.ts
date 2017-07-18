import { NgModule, forwardRef, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { COMPILER_PROVIDERS } from '@angular/compiler';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { TypeaheadModule } from 'ng2-bootstrap/typeahead';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

// import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';
import { formCreatorLayoutModule } from './layouts/form-creator-layout/form-creator-layout.module';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { FormCreatorLayoutComponent } from './layouts/form-creator-layout/form-creator-layout.component';
import { MasterLayoutComponent } from './layouts/master-layout.component';
import { PagesModule } from './pages/pages.module';
import { SharedService } from './shared/shared.service';
import { ChatLayoutComponent } from './layouts/chat-layout.component';

import { AngularFireModule } from 'angularfire2';
import { DashboardLayoutModule } from "./layouts/dashboard-layout/dashboard-layout.module";
import { DashboardLayoutComponent } from "./layouts/dashboard-layout/dashboard-layout.component";
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { IframesLayoutModule } from "./layouts/iframes-layout/iframes-layout.module";
import { IframesLayoutComponent } from "./layouts/iframes-layout/iframes-layout.component";
import { BrandLayoutModule } from "./layouts/brand-layout/brand-layout.module";
import { BrandLayoutComponent } from "./layouts/brand-layout/brand-layout.component";
import {enableProdMode} from '@angular/core';
import { ForgotPasswordResetModule } from "./forgot-password/forgot-password-reset/forgot-password-reset.module";

// enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    TypeaheadModule.forRoot(),
    DashboardLayoutModule,
    formCreatorLayoutModule,
    IframesLayoutModule,
    HttpModule,
    PagesModule,
    BrandLayoutModule,
    ForgotPasswordResetModule
    // AngularFireModule.initializeApp(environment.firebase),
    // ChartsModule,
  ],
  declarations: [
    AppComponent,
    FormCreatorLayoutComponent,
    DashboardLayoutComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    MasterLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    ChatLayoutComponent,
    IframesLayoutComponent,
    BrandLayoutComponent
    
    // BiFormComponentsComponent,
    // SIDEBAR_TOGGLE_DIRECTIVES,
    // AsideToggleDirective,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, SharedService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }