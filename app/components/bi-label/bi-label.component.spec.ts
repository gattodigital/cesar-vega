import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiLabelComponent } from './bi-label.component';

describe('BiLabelComponent', () => {
  let component: BiLabelComponent;
  let fixture: ComponentFixture<BiLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
