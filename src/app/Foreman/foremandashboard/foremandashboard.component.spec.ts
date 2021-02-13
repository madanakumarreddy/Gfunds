import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForemandashboardComponent } from './foremandashboard.component';

describe('ForemandashboardComponent', () => {
  let component: ForemandashboardComponent;
  let fixture: ComponentFixture<ForemandashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForemandashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForemandashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
