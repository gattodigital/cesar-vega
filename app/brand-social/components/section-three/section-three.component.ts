import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent implements OnInit {

  @Input() sectionThreeData;

  public sectionThree;
  public sectionThreeTitle;
  public sectionThreeDescription;
  public sectionThreeParagraph;
  public sectionThreeCards;
  public sectionThreeImage;

  constructor() { }

  ngOnInit() {

    let sectionLen = this.sectionThreeData.length;
    if(sectionLen>1){
      this.sectionThree = this.sectionThreeData;
      if(this.sectionThreeData[0].images.length<=1){
        this.sectionThreeImage = this.sectionThreeData[0].images[0];
      }
    }else{
      this.sectionThreeTitle = this.sectionThreeData[0].title;
      this.sectionThreeDescription = this.sectionThreeData[0].description;
      this.sectionThreeParagraph = this.sectionThreeData[0].paragraphs[0];
      this.sectionThreeCards = this.sectionThreeData[0].cards;
    }
  }

}
