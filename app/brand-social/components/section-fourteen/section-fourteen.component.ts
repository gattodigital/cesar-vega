import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-fourteen',
  templateUrl: './section-fourteen.component.html',
  styleUrls: ['./section-fourteen.component.scss']
})
export class SectionFourteenComponent implements OnInit {

  @Input() sectionFourteenData;

  public sectionFourteenCards;


  constructor() { }

  ngOnInit() {
    this.sectionFourteenCards = this.sectionFourteenData.cards;
  }

}
