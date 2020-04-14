import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiLetaComponent } from './detalji-leta.component';

describe('DetaljiLetaComponent', () => {
  let component: DetaljiLetaComponent;
  let fixture: ComponentFixture<DetaljiLetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljiLetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiLetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
