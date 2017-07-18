import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.scss']
})
export class SectionFourComponent implements OnInit {

  @Input() sectionFourData;

  public sectionFourTitle;
  public sectionFourDescription;
  public sectionFourCards;

  constructor() { }

  ngOnInit() {
    this.sectionFourTitle = this.sectionFourData.title;
    this.sectionFourDescription = this.sectionFourData.description;
    this.sectionFourCards = this.sectionFourData.cards;
  }

}
