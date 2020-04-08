import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiRentacarComponent } from './detalji-rentacar.component';

describe('DetaljiRentacarComponent', () => {
  let component: DetaljiRentacarComponent;
  let fixture: ComponentFixture<DetaljiRentacarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljiRentacarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiRentacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
