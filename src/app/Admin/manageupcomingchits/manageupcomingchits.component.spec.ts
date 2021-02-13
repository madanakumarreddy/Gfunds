import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageupcomingchitsComponent } from './manageupcomingchits.component';

describe('ManageupcomingchitsComponent', () => {
  let component: ManageupcomingchitsComponent;
  let fixture: ComponentFixture<ManageupcomingchitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageupcomingchitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageupcomingchitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
