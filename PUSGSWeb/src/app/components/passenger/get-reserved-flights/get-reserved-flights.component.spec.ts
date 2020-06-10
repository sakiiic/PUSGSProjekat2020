import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReservedFlightsComponent } from './get-reserved-flights.component';

describe('GetReservedFlightsComponent', () => {
  let component: GetReservedFlightsComponent;
  let fixture: ComponentFixture<GetReservedFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetReservedFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReservedFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
