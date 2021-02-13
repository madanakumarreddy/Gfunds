import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForemanclosedfundsComponent } from './foremanclosedfunds.component';

describe('ForemanclosedfundsComponent', () => {
  let component: ForemanclosedfundsComponent;
  let fixture: ComponentFixture<ForemanclosedfundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForemanclosedfundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForemanclosedfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
