import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundallotedComponent } from './fundalloted.component';

describe('FundallotedComponent', () => {
  let component: FundallotedComponent;
  let fixture: ComponentFixture<FundallotedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundallotedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundallotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
