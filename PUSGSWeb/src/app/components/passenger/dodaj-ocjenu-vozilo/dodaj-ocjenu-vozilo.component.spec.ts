import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajOcjenuVoziloComponent } from './dodaj-ocjenu-vozilo.component';

describe('DodajOcjenuVoziloComponent', () => {
  let component: DodajOcjenuVoziloComponent;
  let fixture: ComponentFixture<DodajOcjenuVoziloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajOcjenuVoziloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajOcjenuVoziloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
