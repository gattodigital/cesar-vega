import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent implements OnInit {

  @Input() sectionTwoData;

  public sectionTwoTitle;
  public sectionTwoDescription;
  public sectionTwoParagraph;
  public sectionTwoCards;

  constructor() { }

  ngOnInit() {
    this.sectionTwoTitle = this.sectionTwoData.title;
    this.sectionTwoDescription = this.sectionTwoData.description;
    this.sectionTwoParagraph = this.sectionTwoData.paragraphs[0];
    this.sectionTwoCards = this.sectionTwoData.cards;
  }

}
