import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-thirteen',
  templateUrl: './section-thirteen.component.html',
  styleUrls: ['./section-thirteen.component.scss']
})
export class SectionThirteenComponent implements OnInit {

  @Input() sectionThirteenData;

  public sectionThirteenTitle;
  public sectionThirteenDescription;
  public sectionThirteenParagraph;
  public sectionThirteenMap;
  public sectionThirteenCards;
  public sectionThirteenTextarea;
  public sectionThirteenButtonMessage;

  constructor() { }

  ngOnInit() {
    this.sectionThirteenTitle = this.sectionThirteenData.title;
    this.sectionThirteenDescription = this.sectionThirteenData.description;
    this.sectionThirteenParagraph = this.sectionThirteenData.paragraphs[0];
    this.sectionThirteenMap = this.sectionThirteenData.images[0];
    this.sectionThirteenCards = this.sectionThirteenData.cards;
    this.sectionThirteenTextarea = this.sectionThirteenCards[this.sectionThirteenCards.length -1];
    this.sectionThirteenButtonMessage = this.sectionThirteenData.buttons[0].description;
  }

}
