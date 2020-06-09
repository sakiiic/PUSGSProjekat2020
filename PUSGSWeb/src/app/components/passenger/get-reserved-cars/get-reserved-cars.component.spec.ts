import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReservedCarsComponent } from './get-reserved-cars.component';

describe('GetReservedCarsComponent', () => {
  let component: GetReservedCarsComponent;
  let fixture: ComponentFixture<GetReservedCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetReservedCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReservedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
