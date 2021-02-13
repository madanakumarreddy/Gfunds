import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartnewfundComponent } from './startnewfund.component';

describe('StartnewfundComponent', () => {
  let component: StartnewfundComponent;
  let fixture: ComponentFixture<StartnewfundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartnewfundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartnewfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
