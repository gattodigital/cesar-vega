import { Component, OnInit }            from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './master-layout.component.html'
})
export class MasterLayoutComponent implements OnInit {

    constructor() { }

    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};
    public menutype:string = 'hello3';

    public toggled(open:boolean):void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }


    ngOnInit(): void {}
}
