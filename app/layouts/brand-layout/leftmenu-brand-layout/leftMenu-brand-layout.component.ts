
import {
  Component, OnInit, Injector, Input, Output,
  EventEmitter, ViewChild, AfterViewInit
} from '@angular/core';

import { Router } from '@angular/router';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'left-menu-brand-layout',
  templateUrl: 'leftMenu-brand-layout.component.html',
})

export class LeftMenuBrandLayoutComponent implements OnInit {


  public hideMainMenu: boolean;

  labelText: string = '';
  labelSize: number = 0;

  constructor(private router: Router,
              private _sharedService: SharedService) {}

  // updateLabel(value: string, selectedId: string){
  //   this._sharedService.sendData(value, 'labelData', selectedId);
  // }

  // updateLabelSize(value: number, selectedId: string){
  //   this._sharedService.sendData(value, 'labelSize', selectedId);
  // }
  // updateLabelAlignment(value: number, selectedId: string){
  //   this._sharedService.sendData(value, 'labelAlign', selectedId);
  // }

  ngOnInit() {
     this.hideMainMenu = true;
    if(this.router.url === '/form-creator'){
      this.hideMainMenu = true;
    }else{
      this.hideMainMenu = false;
    }

    if(this.labelText === ''){
      this.labelText = 'Default Text';
    }
    if(this.labelSize === 0){
      this.labelSize = 12;
    }
  }
}
