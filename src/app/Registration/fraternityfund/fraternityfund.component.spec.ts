import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraternityfundComponent } from './fraternityfund.component';

describe('FraternityfundComponent', () => {
  let component: FraternityfundComponent;
  let fixture: ComponentFixture<FraternityfundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraternityfundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraternityfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
