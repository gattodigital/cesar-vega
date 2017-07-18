import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-sixteen',
  templateUrl: './section-sixteen.component.html',
  styleUrls: ['./section-sixteen.component.scss']
})
export class SectionSixteenComponent implements OnInit {


  @Input() sectionSixteenData;

  public sectionSixteenDescription;
  public sectionSixteenCards;

  constructor() { }

  ngOnInit() {
    this.sectionSixteenDescription = this.sectionSixteenData.description;
    this.sectionSixteenCards = this.sectionSixteenData.cards;
  }

}
