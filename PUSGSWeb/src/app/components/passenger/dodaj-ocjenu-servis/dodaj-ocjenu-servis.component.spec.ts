import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajOcjenuServisComponent } from './dodaj-ocjenu-servis.component';

describe('DodajOcjenuServisComponent', () => {
  let component: DodajOcjenuServisComponent;
  let fixture: ComponentFixture<DodajOcjenuServisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajOcjenuServisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajOcjenuServisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
