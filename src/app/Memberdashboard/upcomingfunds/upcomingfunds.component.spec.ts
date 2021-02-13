import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingfundsComponent } from './upcomingfunds.component';

describe('UpcomingfundsComponent', () => {
  let component: UpcomingfundsComponent;
  let fixture: ComponentFixture<UpcomingfundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingfundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
