import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-twelve',
  templateUrl: './section-twelve.component.html',
  styleUrls: ['./section-twelve.component.scss']
})
export class SectionTwelveComponent implements OnInit {

  @Input() sectionTwelveData;

  public sectionTwelveTitle;
  public sectionTwelveDescription;
  public sectionTwelveCards;
  public sectionTwelveImage;

  constructor() { }

  ngOnInit() {
    this.sectionTwelveTitle = this.sectionTwelveData.title;
    this.sectionTwelveDescription = this.sectionTwelveData.description;
    this.sectionTwelveImage = this.sectionTwelveData.images[0];
    this.sectionTwelveCards = this.sectionTwelveData.cards;
  }

}
