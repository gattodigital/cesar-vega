import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-iframes',
  templateUrl: './iframes.component.html',
  styleUrls: ['./iframes.component.scss']
})
export class IframesComponent implements OnInit {

   private toggleMobile;
   private iframeUrls = ['http://www.brandinstitute.com/about.asp','http://www.brandinstitute.com/about.asp','http://www.brandinstitute.com/about.asp'];
   private iframesrc = 'http://www.brandinstitute.com/about.asp';
   private cardClass='card card-accent-secondary'

  constructor(public sanitizer: DomSanitizer, private _sharedService: SharedService ){
    //  this._sharedService.getIframe().subscribe(
    //         res => {
    //           console.log(res);
    //           this.iframesrc = res
    //         },
    //         err => {
    //             console.log(err);
                
    //         }
    //     );
  }

  ngOnInit() {
    
  }

  displayIframe(src){
    // this.iframesrc = src;
  }

  iframeSrc() {
    return this.iframesrc;
  }

}
