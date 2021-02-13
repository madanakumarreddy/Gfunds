import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtmTrackerComponent } from './rtm-tracker.component';

describe('RtmTrackerComponent', () => {
  let component: RtmTrackerComponent;
  let fixture: ComponentFixture<RtmTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtmTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtmTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
