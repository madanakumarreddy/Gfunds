import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtmhomeComponent } from './rtmhome.component';

describe('RtmhomeComponent', () => {
  let component: RtmhomeComponent;
  let fixture: ComponentFixture<RtmhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtmhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtmhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
