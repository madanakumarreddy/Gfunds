import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerunningfundsComponent } from './homerunningfunds.component';

describe('HomerunningfundsComponent', () => {
  let component: HomerunningfundsComponent;
  let fixture: ComponentFixture<HomerunningfundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomerunningfundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerunningfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
