import { Component, OnInit, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'section-eleven',
  templateUrl: './section-eleven.component.html',
  styleUrls: ['./section-eleven.component.scss']
})
export class SectionElevenComponent implements OnInit {

  @Input() sectionElevenData;

  public sectionElevenTitle;
  public sectionElevenDescription;
  public sectionElevenCards;
  public sectionElevenVideoCard;

  constructor() { }

  ngOnInit() {
    this.sectionElevenTitle = this.sectionElevenData.title;
    this.sectionElevenDescription = this.sectionElevenData.description;
    this.sectionElevenCards = this.sectionElevenData.cards;
    this.sectionElevenVideoCard = this.sectionElevenData.cards[this.sectionElevenData.cards.length-1];
  }
}

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
