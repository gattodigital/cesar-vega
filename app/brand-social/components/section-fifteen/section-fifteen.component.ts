import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-fifteen',
  templateUrl: './section-fifteen.component.html',
  styleUrls: ['./section-fifteen.component.scss']
})
export class SectionFifteenComponent implements OnInit {

  @Input() sectionFifteenData;

  public sectionFifteenCards;

  constructor() { }

  ngOnInit() {
    this.sectionFifteenCards = this.sectionFifteenData.cards;
  }

}
