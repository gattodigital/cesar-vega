import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SectionOneComponent implements OnInit  {

  @Input() sectionOneData;

  public sectionOneList;
  public sectionOneButtonOne;
  public sectionOneButtonTwo;
  public sectionOneImage;

  constructor() { }

  ngOnInit() {
    this.sectionOneList = this.sectionOneData.list;
    this.sectionOneImage = this.sectionOneData.images[0];
    this.sectionOneButtonOne = this.sectionOneData.buttons[0].description;
    this.sectionOneButtonTwo = this.sectionOneData.buttons[1].description;
  }

}
