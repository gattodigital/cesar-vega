import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFourteenComponent } from './section-fourteen.component';

describe('SectionFourteenComponent', () => {
  let component: SectionFourteenComponent;
  let fixture: ComponentFixture<SectionFourteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFourteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
