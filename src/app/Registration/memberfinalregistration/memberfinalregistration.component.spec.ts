import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberfinalregistrationComponent } from './memberfinalregistration.component';

describe('MemberfinalregistrationComponent', () => {
  let component: MemberfinalregistrationComponent;
  let fixture: ComponentFixture<MemberfinalregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberfinalregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberfinalregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
