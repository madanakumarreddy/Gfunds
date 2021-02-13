import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsummaryComponent } from './fundsummary.component';

describe('FundsummaryComponent', () => {
  let component: FundsummaryComponent;
  let fixture: ComponentFixture<FundsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
