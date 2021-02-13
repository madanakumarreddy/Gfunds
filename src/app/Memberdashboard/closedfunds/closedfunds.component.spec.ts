import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedfundsComponent } from './closedfunds.component';

describe('ClosedfundsComponent', () => {
  let component: ClosedfundsComponent;
  let fixture: ComponentFixture<ClosedfundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedfundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
