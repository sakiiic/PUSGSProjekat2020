import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFlightsComponent } from './get-flights.component';

describe('GetFlightsComponent', () => {
  let component: GetFlightsComponent;
  let fixture: ComponentFixture<GetFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
