import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmemberprofileComponent } from './viewmemberprofile.component';

describe('ViewmemberprofileComponent', () => {
  let component: ViewmemberprofileComponent;
  let fixture: ComponentFixture<ViewmemberprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmemberprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmemberprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
