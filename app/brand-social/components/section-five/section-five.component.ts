import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-five',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.scss']
})
export class SectionFiveComponent implements OnInit {

  @Input() sectionFiveData;

  public sectionFiveTitle;
  public sectionFiveButtonOne;
  public sectionFiveCards;
  public sectionFiveImage;

  constructor() { }

  ngOnInit() {
    this.sectionFiveTitle = this.sectionFiveData.title;
    this.sectionFiveCards = this.sectionFiveData.cards;
    this.sectionFiveButtonOne = this.sectionFiveData.buttons[0].description;
    if(this.sectionFiveData.images.length<=1){
        this.sectionFiveImage = this.sectionFiveData.images[0];
    }
  }

}
