
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/shared.service';


@Component({
  selector: 'left-menu-iframe',
  templateUrl: 'left-menu-iframe.component.html',
})

export class LeftMenuIframeComponent implements OnInit {


  public hideMainMenu: boolean;
  public iframeData: Array<string>;
  public iframeIndexes: Array<string>;

  labelText: string = '';
  labelSize: number = 0;

  constructor(private router: Router,
    private _sharedService: SharedService, private sanitizer: DomSanitizer) { }

  updateLabel(value: string, selectedId: string){
    this._sharedService.loadIframe('');
  }

   loadIframe(src){
    this._sharedService.loadIframe(src);
  }

  
  
  ngOnInit() {
    this.iframeData = [
    'http://www.brandinstitute.com/about.asp',
    'http://louisbullock.com.au',
    'https://supple.com.au/tools/google-review-link-generator./',
    'https://www.typescriptlang.org/docs/handbook/basic-types.html',
    'https://www.atlassian.com/software/jira',
    'http://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/']
  }


}