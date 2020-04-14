import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiVozilaComponent } from './detalji-vozila.component';

describe('DetaljiVozilaComponent', () => {
  let component: DetaljiVozilaComponent;
  let fixture: ComponentFixture<DetaljiVozilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljiVozilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiVozilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
