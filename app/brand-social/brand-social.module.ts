import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandSocialComponent } from "./brand-social.component";
import { DragulaModule } from "ng2-dragula";
import { FormsModule } from '@angular/forms';
import { BrandSocialRoutingModule } from "./brand-social-routing.component";
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionThreeComponent } from './components/section-three/section-three.component';
import { SectionFourComponent } from './components/section-four/section-four.component';
import { SectionFiveComponent } from './components/section-five/section-five.component';
import { SectionSixComponent } from './components/section-six/section-six.component';
import { SectionSevenComponent } from './components/section-seven/section-seven.component';
import { SectionEightComponent } from './components/section-eight/section-eight.component';
import { SectionNineComponent } from './components/section-nine/section-nine.component';
import { SectionTenComponent } from './components/section-ten/section-ten.component';
import { SectionElevenComponent, SafePipe } from './components/section-eleven/section-eleven.component';
import { SectionTwelveComponent } from './components/section-twelve/section-twelve.component';
import { SectionThirteenComponent } from './components/section-thirteen/section-thirteen.component';
import { SectionFourteenComponent } from './components/section-fourteen/section-fourteen.component';
import { SectionFifteenComponent } from './components/section-fifteen/section-fifteen.component';
import { SectionSixteenComponent } from './components/section-sixteen/section-sixteen.component';

import { ng2Parallax  } from '../../../node_modules/ang2-parallax/ng2parallax';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DragulaModule,
    BrandSocialRoutingModule,
    
  ],
  declarations: [ng2Parallax, SafePipe, BrandSocialComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, SectionFiveComponent, SectionSixComponent, SectionSevenComponent, SectionEightComponent, SectionNineComponent, SectionTenComponent, SectionElevenComponent, SectionTwelveComponent, SectionThirteenComponent, SectionFourteenComponent, SectionFifteenComponent, SectionSixteenComponent]
})
export class BrandSocialModule { }
