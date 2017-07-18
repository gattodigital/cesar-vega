import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFifteenComponent } from './section-fifteen.component';

describe('SectionFifteenComponent', () => {
  let component: SectionFifteenComponent;
  let fixture: ComponentFixture<SectionFifteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFifteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
