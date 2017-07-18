import { Component, OnInit, NgZone } from '@angular/core';
// import { LeftMenuComponent } from '../leftmenu/leftMenu.component';
@Component({
    selector: 'app-form-creator-layout',
    templateUrl: './form-creator-layout.component.html',

})
export class FormCreatorLayoutComponent implements OnInit {
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
    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }
    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    public inputValue;
    
    constructor(private ngZone: NgZone) {
        this.windowSizeDetect();
    }
    ngOnInit(): void {

        window.onresize = (e) => {
            this.windowSizeDetect();
        };
        let index = 3;
        this.hideBody = this.layoutSettings[index].hideBody;
        this.hideFooter = this.layoutSettings[index].hideFooter;
        this.hideHeader = this.layoutSettings[index].hideHeader;
        this.hideLeftMenu = this.layoutSettings[index].hideLeftMenu;
        this.hideRightMenu = this.layoutSettings[index].hideRightMenu;      

    }
    private windowSizeDetect(): void {
   
        this.ngZone.run(() => {
            if (window.innerWidth <= 1024) {
                this.containerType = 'container-fluid';
                     this.appType = '';      
            } else if (window.innerWidth > 1024) {
                this.containerType = 'container';        
                this.appType = 'app-body';
            }
        });
    }
}