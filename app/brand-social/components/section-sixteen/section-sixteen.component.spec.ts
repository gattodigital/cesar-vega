import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSixteenComponent } from './section-sixteen.component';

describe('SectionSixteenComponent', () => {
  let component: SectionSixteenComponent;
  let fixture: ComponentFixture<SectionSixteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSixteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
