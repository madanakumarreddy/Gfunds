import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamembersComponent } from './camembers.component';

describe('CamembersComponent', () => {
  let component: CamembersComponent;
  let fixture: ComponentFixture<CamembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
