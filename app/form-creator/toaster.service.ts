import { Injectable } from '@angular/core';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
@Injectable()
export class ToasterServiceAlert {
  private toasterService: ToasterService;
  public toasterconfig: ToasterConfig =
  new ToasterConfig({
    tapToDismiss: true,
    timeout: 5000
  });
  constructor(toasterService: ToasterService)
  { this.toasterService = toasterService; }

  showSuccess(msgtitle:any,msg:any) {
    this.toasterService.pop('success', msgtitle, msg);
  }

  showError(msgtitle:any,msg:any) {
    this.toasterService.pop('error', msgtitle, msg);
  }

  showWarning(msgtitle:any,msg:any) {
    this.toasterService.pop('warning', msgtitle, msg);
  }

  showInfo(msgtitle:any,msg:any) {
    this.toasterService.pop('info', msgtitle, msg);
  }

  showPrimary(msgtitle:any,msg:any) {
    this.toasterService.pop('primary', msgtitle, msg);
  }

}
