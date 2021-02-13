import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForemanregistrationComponent } from './foremanregistration.component';

describe('ForemanregistrationComponent', () => {
  let component: ForemanregistrationComponent;
  let fixture: ComponentFixture<ForemanregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForemanregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForemanregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
