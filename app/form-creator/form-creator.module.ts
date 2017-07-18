import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/modal';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { TypeaheadModule } from 'ng2-bootstrap/typeahead';
// import { ModalsComponent } from '../components/modals.component';
import { FormCreatorRoutingModule } from './form-creator-routing.module';
import { FormCreatorComponent } from './form-creator.component';
import { BiFormComponentsComponent } from '../bi-form-components/bi-form-components.component';
import { KeysPipe } from '../bi-form-components/bi-form-components.component';
import { BiInputIcon } from '../bi-form-components/bi-form-components.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule  } from 'ng2-bootstrap/tooltip';
import { Ng2DraggableModule } from 'ng2-draggable';
import { FormWizardModule } from 'angular2-wizard';
import { FileUploadModule } from 'ng2-file-upload';
import { ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';
import { ToasterServiceAlert } from './toaster.service';

import { SelectModule } from 'ng2-select';

@NgModule({
  declarations: [
    FormCreatorComponent,
    // ModalsComponent,
    BiFormComponentsComponent,
    BiInputIcon,
    KeysPipe
  ],
  imports: [
    FormCreatorRoutingModule,
    CommonModule,
    Ng2DraggableModule,
    FormWizardModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    ToasterModule,
    SelectModule
  ],
  providers:[ToasterService, ToasterServiceAlert],
  exports: [
    CommonModule
  ]
})

export class FormCreatorModule { }
