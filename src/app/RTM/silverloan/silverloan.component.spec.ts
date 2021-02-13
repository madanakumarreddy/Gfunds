import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverloanComponent } from './silverloan.component';

describe('SilverloanComponent', () => {
  let component: SilverloanComponent;
  let fixture: ComponentFixture<SilverloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilverloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
