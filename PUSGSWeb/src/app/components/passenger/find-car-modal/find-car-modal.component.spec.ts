import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCarModalComponent } from './find-car-modal.component';

describe('FindCarModalComponent', () => {
  let component: FindCarModalComponent;
  let fixture: ComponentFixture<FindCarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
