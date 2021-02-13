import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageexcutiveComponent } from './manageexcutive.component';

describe('ManageexcutiveComponent', () => {
  let component: ManageexcutiveComponent;
  let fixture: ComponentFixture<ManageexcutiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageexcutiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageexcutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
