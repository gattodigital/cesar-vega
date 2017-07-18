import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-six',
  templateUrl: './section-six.component.html',
  styleUrls: ['./section-six.component.scss']
})
export class SectionSixComponent implements OnInit {

  @Input() sectionSixData;

  public sectionSixTitle;
  public sectionSixCards;
  public sectionSixDescription;

  constructor() { }

  ngOnInit() {
    this.sectionSixTitle = this.sectionSixData.title;
    this.sectionSixDescription = this.sectionSixData.description;
    this.sectionSixCards = this.sectionSixData.cards;
  }

}
