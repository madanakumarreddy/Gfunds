import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberuploadComponent } from './memberupload.component';

describe('MemberuploadComponent', () => {
  let component: MemberuploadComponent;
  let fixture: ComponentFixture<MemberuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
