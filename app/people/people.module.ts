import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PeopleService } from './people.service';
import { HttpModule } from '@angular/http';
import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ng2-bootstrap/tabs';

// Timepicker
import { TimepickerModule } from 'ng2-bootstrap/timepicker';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';

// Datepicker
import { SelectModule } from 'ng2-select';

@NgModule({
  declarations: [ PeopleComponent],
  imports: [
    PeopleRoutingModule,
    SelectModule,
    DatepickerModule,
    CommonModule,
    TimepickerModule,
    ChartsModule,
    HttpModule,
    TabsModule
  ],
  providers:[{provide:'peopleService', useClass: PeopleService}],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PeopleModule { }
