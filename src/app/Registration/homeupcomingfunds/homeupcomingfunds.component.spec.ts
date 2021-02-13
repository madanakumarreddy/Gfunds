import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeupcomingfundsComponent } from './homeupcomingfunds.component';

describe('HomeupcomingfundsComponent', () => {
  let component: HomeupcomingfundsComponent;
  let fixture: ComponentFixture<HomeupcomingfundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeupcomingfundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeupcomingfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
