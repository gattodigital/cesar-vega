import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
@Component({
selector: 'app-brand-social',
templateUrl: './templates/index-barbershop.html',
styleUrls:['./brand-social.component.scss']
})
export class BrandSocialComponent implements OnInit {

  private cardClass = 'card card-accent-secondary'

  constructor(private http: Http) {
  
  }

  public getJSON(): Observable<any> {
    return this.http.get("./src/database/index-alt-data.json")
      .map((res: any) => res.json());
  }
  public sectionOneData;
  public sectionTwoData;
  public sectionThreeData;
  public sectionFourData;
  public sectionFiveData;
  public sectionSixData;
  public sectionSevenData;
  public sectionEightData;
  public sectionNineData;
  public sectionTenData;
  public sectionElevenData;
  public sectionTwelveData;
  public sectionThirteenData;
  public sectionFourteenData;
  public sectionFifteenData;
  public sectionSixteenData;



  public sectionOneList;
  public sectionOneButtonOne;
  public sectionOneButtonTwo;
  public sectionOneImage;


  public sectionTwoTitle;
  public sectionTwoDescription;
  public sectionTwoParagraph;
  public sectionTwoCards;

  public sectionThree;
  public sectionThreeTitle;
  public sectionThreeDescription;
  public sectionThreeParagraph;
  public sectionThreeCards;
  public sectionThreeImage;

  public sectionFourTitle;
  public sectionFourDescription;
  public sectionFourCards;

  public sectionFiveTitle;
  public sectionFiveButtonOne;
  public sectionFiveCards;
  public sectionFiveImage;

  public sectionSixTitle;
  public sectionSixCards;
  public sectionSixDescription;

  public sectionSevenTitle;
  public sectionSevenDescription;
  public sectionSevenParagraphs;
  public sectionSevenList;
  public sectionSevenCards;

  public sectionEightTitle;
  public sectionEightDescription;
  public sectionEightCards;

  public sectionNineTitle;
  public sectionNineDescription;
  public sectionNineCards;

  public sectionTenList;
  public sectionTenDescription;
  public sectionTenButtonOne;
  public sectionTenImage;

  public sectionElevenTitle;
  public sectionElevenDescription;
  public sectionElevenCards;
  public sectionElevenVideo;
  public sectionElevenVideoTitle;
  public sectionElevenVideoParagraph;
  public sectionElevenVideoFooterDescription;

  public sectionTwelveTitle;
  public sectionTwelveDescription;
  public sectionTwelveCards;
  public sectionTwelveImage;

  public sectionThirteenTitle;
  public sectionThirteenDescription;
  public sectionThirteenParagraph;
  public sectionThirteenMap;
  public sectionThirteenCards;
  public sectionThirteenTextareaParagraph;
  public sectionThirteenButtonMessage;

  public sectionFourteenCards;

  public sectionFifteenCards;

  public sectionSixteenDescription;
  public sectionSixteenCards;

  ngOnInit() {

    this.getJSON().subscribe(data => {
      data.map(obj => {
          if(Object.keys(obj)[0] === 'section_one'){
            this.sectionOneData = obj[Object.keys(obj)[0]][0];

            this.sectionOneList = this.sectionOneData.list;
            this.sectionOneImage = this.sectionOneData.images[0];
            this.sectionOneButtonOne = this.sectionOneData.buttons[0].description;
            this.sectionOneButtonTwo = this.sectionOneData.buttons[1].description;
          }
          if(Object.keys(obj)[0] === 'section_two'){
            this.sectionTwoData = obj[Object.keys(obj)[0]][0];

            this.sectionTwoTitle = this.sectionTwoData.title;
            this.sectionTwoDescription = this.sectionTwoData.description;
            this.sectionTwoParagraph = this.sectionTwoData.paragraphs[0];
            this.sectionTwoCards = this.sectionTwoData.cards;
          }
          if(Object.keys(obj)[0] === 'section_three'){
            this.sectionThreeData = obj[Object.keys(obj)[0]];

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

          if(Object.keys(obj)[0] === 'section_four'){
            this.sectionFourData = obj[Object.keys(obj)[0]][0];

            this.sectionFourTitle = this.sectionFourData.title;
            this.sectionFourDescription = this.sectionFourData.description;
            this.sectionFourCards = this.sectionFourData.cards;
          }

          if(Object.keys(obj)[0] === 'section_five'){
            this.sectionFiveData = obj[Object.keys(obj)[0]][0];

            this.sectionFiveTitle = this.sectionFiveData.title;
            this.sectionFiveCards = this.sectionFiveData.cards;
            this.sectionFiveButtonOne = this.sectionFiveData.buttons[0].description;
            if(this.sectionFiveData.images.length<=1){
                this.sectionFiveImage = this.sectionFiveData.images[0];
            }
          }

          if(Object.keys(obj)[0] === 'section_six'){
            this.sectionSixData = obj[Object.keys(obj)[0]][0];

            this.sectionSixTitle = this.sectionSixData.title;
            this.sectionSixDescription = this.sectionSixData.description;
            this.sectionSixCards = this.sectionSixData.cards;
          }

          if(Object.keys(obj)[0] === 'section_seven'){
            this.sectionSevenData = obj[Object.keys(obj)[0]][0];

            this.sectionSevenTitle = this.sectionSevenData.title;
            this.sectionSevenDescription = this.sectionSevenData.description;
            this.sectionSevenParagraphs = this.sectionSevenData.paragraphs[0];
            this.sectionSevenList = this.sectionSevenData.list;
            this.sectionSevenCards = this.sectionSevenData.cards;
          }

          if(Object.keys(obj)[0] === 'section_eight'){
            this.sectionEightData = obj[Object.keys(obj)[0]][0];

            this.sectionEightTitle = this.sectionEightData.title;
            this.sectionEightDescription = this.sectionEightData.description;
            this.sectionEightCards = this.sectionEightData.cards;
          }

          if(Object.keys(obj)[0] === 'section_nine'){
            this.sectionNineData = obj[Object.keys(obj)[0]][0];

            this.sectionNineTitle = this.sectionNineData.title;
            this.sectionNineDescription = this.sectionNineData.description;
            this.sectionNineCards = this.sectionNineData.cards;
          }
          if(Object.keys(obj)[0] === 'section_ten'){
            this.sectionTenData = obj[Object.keys(obj)[0]][0];

            this.sectionTenList = this.sectionTenData.list;
            this.sectionTenDescription = this.sectionTenData.description;
            this.sectionTenImage = this.sectionTenData.images[0];
            this.sectionTenButtonOne = this.sectionTenData.buttons[0].description;
          }
          if(Object.keys(obj)[0] === 'section_eleven'){
            this.sectionElevenData = obj[Object.keys(obj)[0]][0];

            this.sectionElevenTitle = this.sectionElevenData.title;
            this.sectionElevenDescription = this.sectionElevenData.description;
            this.sectionElevenCards = this.sectionElevenData.cards;
            this.sectionElevenVideo = this.sectionElevenData.cards[this.sectionElevenData.cards.length-1].image;
            this.sectionElevenVideoTitle = this.sectionElevenData.cards[this.sectionElevenData.cards.length-1].title;
            this.sectionElevenVideoParagraph = this.sectionElevenData.cards[this.sectionElevenData.cards.length-1].paragraph;
            this.sectionElevenVideoFooterDescription = this.sectionElevenData.cards[this.sectionElevenData.cards.length-1].footerDescription;
          }
          if(Object.keys(obj)[0] === 'section_twelve'){
            this.sectionTwelveData = obj[Object.keys(obj)[0]][0];

            this.sectionTwelveTitle = this.sectionTwelveData.title;
            this.sectionTwelveDescription = this.sectionTwelveData.description;
            this.sectionTwelveImage = this.sectionTwelveData.images[0];
            this.sectionTwelveCards = this.sectionTwelveData.cards;
          }
          if(Object.keys(obj)[0] === 'section_thirteen'){
            this.sectionThirteenData = obj[Object.keys(obj)[0]][0];


            this.sectionThirteenTitle = this.sectionThirteenData.title;
            this.sectionThirteenDescription = this.sectionThirteenData.description;
            this.sectionThirteenParagraph = this.sectionThirteenData.paragraphs[0];
            this.sectionThirteenMap = this.sectionThirteenData.images[0];
            this.sectionThirteenCards = this.sectionThirteenData.cards;
            this.sectionThirteenTextareaParagraph = this.sectionThirteenCards[this.sectionThirteenCards.length -1].paragraph;
            this.sectionThirteenButtonMessage = this.sectionThirteenData.buttons[0].description;
          }
          if(Object.keys(obj)[0] === 'section_fourteen'){
            this.sectionFourteenData = obj[Object.keys(obj)[0]][0];

            this.sectionFourteenCards = this.sectionFourteenData.cards;
          }
          if(Object.keys(obj)[0] === 'section_fifteen'){
            this.sectionFifteenData = obj[Object.keys(obj)[0]][0];

            this.sectionFifteenCards = this.sectionFifteenData.cards;
          }
          if(Object.keys(obj)[0] === 'section_sixteen'){
            this.sectionSixteenData = obj[Object.keys(obj)[0]][0];

            this.sectionSixteenDescription = this.sectionSixteenData.description;
            this.sectionSixteenCards = this.sectionSixteenData.cards;
          }
      });
    });
  }

}
