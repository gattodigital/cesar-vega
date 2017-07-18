import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-seven',
  templateUrl: './section-seven.component.html',
  styleUrls: ['./section-seven.component.scss']
})
export class SectionSevenComponent implements OnInit {

  @Input() sectionSevenData;

  public sectionSevenTitle;
  public sectionSevenDescription;
  public sectionSevenParagraphs;
  public sectionSevenList;
  public sectionSevenCards;

  constructor() { }

  ngOnInit() {
    this.sectionSevenTitle = this.sectionSevenData.title;
    this.sectionSevenDescription = this.sectionSevenData.description;
    this.sectionSevenParagraphs = this.sectionSevenData.paragraphs[0];
    this.sectionSevenList = this.sectionSevenData.list;
    this.sectionSevenCards = this.sectionSevenData.cards;
  }

}
