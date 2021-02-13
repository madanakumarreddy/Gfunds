import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtmDashboardComponent } from './rtm-dashboard.component';

describe('RtmDashboardComponent', () => {
  let component: RtmDashboardComponent;
  let fixture: ComponentFixture<RtmDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtmDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
