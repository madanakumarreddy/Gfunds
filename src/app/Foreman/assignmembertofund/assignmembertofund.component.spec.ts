import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmembertofundComponent } from './assignmembertofund.component';

describe('AssignmembertofundComponent', () => {
  let component: AssignmembertofundComponent;
  let fixture: ComponentFixture<AssignmembertofundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmembertofundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmembertofundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
