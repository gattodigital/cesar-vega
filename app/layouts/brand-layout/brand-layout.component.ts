import { Component, OnInit, NgZone } from '@angular/core';
@Component({
    selector: 'app-brand-layout',
    templateUrl: './brand-layout.component.html',

})
export class BrandLayoutComponent implements OnInit {
    public disabled: boolean = false;
    public status: { isopen: boolean } = { isopen: false };
    public layoutSettings = [
        { "hideBody": false, "hideFooter": false, "hideHeader": false, "hideLeftMenu": false, "hideRightMenu": false },
        { "hideBody": false, "hideFooter": true, "hideHeader": false, "hideLeftMenu": false, "hideRightMenu": true },
        { "hideBody": false, "hideFooter": true, "hideHeader": false, "hideLeftMenu": true, "hideRightMenu": true },
        { "hideBody": false, "hideFooter": true, "hideHeader": true, "hideLeftMenu": true, "hideRightMenu": true },
        { "hideBody": false, "hideFooter": true, "hideHeader": false, "hideLeftMenu": true, "hideRightMenu": false },
    ]
    public hideBody: boolean;
    public hideFooter: boolean;
    public hideHeader: boolean;
    public hideLeftMenu: boolean;
    public hideRightMenu: boolean;
    public containerType: string = 'container';
    public appType: string = 'app-body';
    public inputValue;

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
    
    constructor(private ngZone: NgZone) {
        this.windowSizeDetect();
    }

    ngOnInit(): void {       
        let index = 1;
        this.hideBody = this.layoutSettings[index].hideBody;
        this.hideFooter = this.layoutSettings[index].hideFooter;
        this.hideHeader = this.layoutSettings[index].hideHeader;
        this.hideLeftMenu = this.layoutSettings[index].hideLeftMenu;
        this.hideRightMenu = this.layoutSettings[index].hideRightMenu;    
    }
    private windowSizeDetect(): void {
        this.appType = 'app-body';
        this.ngZone.run(() => {
            if (window.innerWidth <= 1024) {
                this.containerType = 'container';                
            } else if (window.innerWidth > 1024) {
                this.containerType = 'container-fluid';
            }
        });
    }
}
