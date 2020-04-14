import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiAviokompanijaComponent } from './detalji-aviokompanija.component';

describe('DetaljiAviokompanijaComponent', () => {
  let component: DetaljiAviokompanijaComponent;
  let fixture: ComponentFixture<DetaljiAviokompanijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljiAviokompanijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiAviokompanijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
