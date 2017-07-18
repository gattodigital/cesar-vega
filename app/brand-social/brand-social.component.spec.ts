import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSocialComponent } from './brand-social.component';

describe('BrandSocialComponent', () => {
  let component: BrandSocialComponent;
  let fixture: ComponentFixture<BrandSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
