import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForemanrunningfundsComponent } from './foremanrunningfunds.component';

describe('ForemanrunningfundsComponent', () => {
  let component: ForemanrunningfundsComponent;
  let fixture: ComponentFixture<ForemanrunningfundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForemanrunningfundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForemanrunningfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
