import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { SeedComponent } from './seed.component';
import { SeedRoutingModule } from './seed-routing.module';

import { CommonModule } from '@angular/common';

// Timepicker
import { TimepickerModule } from 'ng2-bootstrap/timepicker';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';

// Datepicker
import { SelectModule } from 'ng2-select';

@NgModule({
  imports: [
    SeedRoutingModule,
    SelectModule,
    DatepickerModule,
    CommonModule,
    TimepickerModule,
    ChartsModule
  ],
  declarations: [ SeedComponent ]
})
export class SeedModule { }
