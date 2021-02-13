import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributedloanComponent } from './distributedloan.component';

describe('DistributedloanComponent', () => {
  let component: DistributedloanComponent;
  let fixture: ComponentFixture<DistributedloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributedloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributedloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
