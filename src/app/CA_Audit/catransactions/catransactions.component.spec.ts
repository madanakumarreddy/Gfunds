import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatransactionsComponent } from './catransactions.component';

describe('CatransactionsComponent', () => {
  let component: CatransactionsComponent;
  let fixture: ComponentFixture<CatransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
