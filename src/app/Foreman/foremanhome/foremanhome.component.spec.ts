import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForemanhomeComponent } from './foremanhome.component';

describe('ForemanhomeComponent', () => {
  let component: ForemanhomeComponent;
  let fixture: ComponentFixture<ForemanhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForemanhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForemanhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
