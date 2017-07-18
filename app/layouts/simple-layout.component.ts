import { Component, OnInit }        from '@angular/core';

@Component({
    selector: 'app-dashboard',
   templateUrl: './simple-layout.component.html'
})
export class SimpleLayoutComponent implements OnInit {

    constructor() { }
    
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

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    ngOnInit(): void {

        let index = 0;        
        // let index = Math.floor(Math.random() * (4 - 0)) + 0;
        this.hideBody = this.layoutSettings[index].hideBody;
        this.hideFooter = this.layoutSettings[index].hideFooter;
        this.hideHeader = this.layoutSettings[index].hideHeader;
        this.hideLeftMenu = this.layoutSettings[index].hideLeftMenu;
        this.hideRightMenu = this.layoutSettings[index].hideRightMenu;

        if (this.hideLeftMenu) {
            let mainBody = <HTMLElement>document.querySelector('.main');
            mainBody.style.marginLeft = '0px';
        }
        if (this.hideHeader) {
            let appBody = <HTMLElement>document.querySelector('.app-body');
            appBody.style.marginTop = '0px';
        }

    }
}
