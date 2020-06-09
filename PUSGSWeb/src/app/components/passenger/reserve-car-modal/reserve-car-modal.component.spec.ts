import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveCarModalComponent } from './reserve-car-modal.component';

describe('ReserveCarModalComponent', () => {
  let component: ReserveCarModalComponent;
  let fixture: ComponentFixture<ReserveCarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveCarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
