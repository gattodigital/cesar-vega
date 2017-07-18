import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-ten',
  templateUrl: './section-ten.component.html',
  styleUrls: ['./section-ten.component.scss']
})
export class SectionTenComponent implements OnInit {

  @Input() sectionTenData;

  public sectionTenList;
  public sectionTenDescription;
  public sectionTenButtonOne;
  public sectionTenImage;

  constructor() { }

  ngOnInit() {
    this.sectionTenList = this.sectionTenData.list;
    this.sectionTenDescription = this.sectionTenData.description;
    this.sectionTenImage = this.sectionTenData.images[0];
    this.sectionTenButtonOne = this.sectionTenData.buttons[0].description;
  }

}
