import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaMemberDetailsComponent } from './ca-member-details.component';

describe('CaMemberDetailsComponent', () => {
  let component: CaMemberDetailsComponent;
  let fixture: ComponentFixture<CaMemberDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaMemberDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaMemberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
