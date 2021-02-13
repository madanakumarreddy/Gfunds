import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningfundsComponent } from './runningfunds.component';

describe('RunningfundsComponent', () => {
  let component: RunningfundsComponent;
  let fixture: ComponentFixture<RunningfundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningfundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
