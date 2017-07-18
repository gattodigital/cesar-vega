import { Component, OnInit }        from '@angular/core';

@Component({
    selector: 'app-dashboard',
     templateUrl: './chat-layout.component.html',
     styles:[`width: 300px;`]
})
export class ChatLayoutComponent implements OnInit {

    private usersData;
    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};

    constructor() {
        // the hard code data will be replce for a service
        this.usersData = [
            {imgSrc:"assets/img/avatars/8.jpg", userName:"Cesar Vega", status:"life is beatiful", icon:"fa fa-volume-up", lastTimeChat:"Just now"},
            {imgSrc:"assets/img/avatars/7.jpg", userName:"Carlos Acevedo", status:"life is awesome", icon:"fa fa-volume-up", lastTimeChat:"5 min ago"},
            {imgSrc:"assets/img/avatars/6.jpg", userName:"Beatriz Soto", status:"help me God", icon:"fa fa-volume-up", lastTimeChat:"10:30 am"},
            {imgSrc:"assets/img/avatars/5.jpg", userName:"Ricardo Mayor", status:"uff tell me ", icon:"fa fa-volume-up", lastTimeChat:"09:30 am"},
            {imgSrc:"assets/img/avatars/4.jpg", userName:"Pablo Caceres", status:"life is beatiful", icon:"fa fa-volume-up", lastTimeChat:"08:30 am"},
            {imgSrc:"assets/img/avatars/3.jpg", userName:"Rick Scott", status:"tire of work", icon:"fa fa-volume-up", lastTimeChat:"08:40 am"},
            ];
     }

    public toggled(open:boolean):void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    onClick(i):void{
    }

    ngOnInit(): void {}

    
}
