import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
// Invoice
import { InvoiceComponent } from './invoice.component';

//Routing
import { InvoiceRoutingModule } from './invoice-routing.module';
//
@NgModule({
  imports: [
    InvoiceRoutingModule,
    CommonModule,
    ChartsModule
  ],
  declarations: [
    InvoiceComponent
  ]
})
export class InvoiceModule { }
