import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatinumloanComponent } from './platinumloan.component';

describe('PlatinumloanComponent', () => {
  let component: PlatinumloanComponent;
  let fixture: ComponentFixture<PlatinumloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatinumloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatinumloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
