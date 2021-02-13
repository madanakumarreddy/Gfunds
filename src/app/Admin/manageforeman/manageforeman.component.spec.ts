import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageforemanComponent } from './manageforeman.component';

describe('ManageforemanComponent', () => {
  let component: ManageforemanComponent;
  let fixture: ComponentFixture<ManageforemanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageforemanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageforemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
