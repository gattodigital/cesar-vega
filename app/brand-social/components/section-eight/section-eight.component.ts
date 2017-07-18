import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-eight',
  templateUrl: './section-eight.component.html',
  styleUrls: ['./section-eight.component.scss']
})
export class SectionEightComponent implements OnInit {

  @Input() sectionEightData;

  public sectionEightTitle;
  public sectionEightDescription;
  public sectionEightCards;

  constructor() { }

  ngOnInit() {
    this.sectionEightTitle = this.sectionEightData.title;
    this.sectionEightDescription = this.sectionEightData.description;
    this.sectionEightCards = this.sectionEightData.cards;
  }

}
