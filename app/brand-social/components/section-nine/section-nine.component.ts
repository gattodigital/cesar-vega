import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-nine',
  templateUrl: './section-nine.component.html',
  styleUrls: ['./section-nine.component.scss']
})
export class SectionNineComponent implements OnInit {

  @Input() sectionNineData;

  public sectionNineTitle;
  public sectionNineDescription;
  public sectionNineCards;

  constructor() { }

  ngOnInit() {
    this.sectionNineTitle = this.sectionNineData.title;
    this.sectionNineDescription = this.sectionNineData.description;
    this.sectionNineCards = this.sectionNineData.cards;
  }

}
