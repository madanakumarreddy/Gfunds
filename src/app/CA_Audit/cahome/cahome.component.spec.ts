import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CahomeComponent } from './cahome.component';

describe('CahomeComponent', () => {
  let component: CahomeComponent;
  let fixture: ComponentFixture<CahomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CahomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
