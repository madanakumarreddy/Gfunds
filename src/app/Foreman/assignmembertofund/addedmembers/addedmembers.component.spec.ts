import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedmembersComponent } from './addedmembers.component';

describe('AddedmembersComponent', () => {
  let component: AddedmembersComponent;
  let fixture: ComponentFixture<AddedmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
