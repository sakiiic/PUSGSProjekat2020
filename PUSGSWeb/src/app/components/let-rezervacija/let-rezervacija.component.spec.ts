import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetRezervacijaComponent } from './let-rezervacija.component';

describe('LetRezervacijaComponent', () => {
  let component: LetRezervacijaComponent;
  let fixture: ComponentFixture<LetRezervacijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetRezervacijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetRezervacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
