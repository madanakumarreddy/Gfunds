import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagechitComponent } from './managechit.component';

describe('ManagechitComponent', () => {
  let component: ManagechitComponent;
  let fixture: ComponentFixture<ManagechitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagechitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagechitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
