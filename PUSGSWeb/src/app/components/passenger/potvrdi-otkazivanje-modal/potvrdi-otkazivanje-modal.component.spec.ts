import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotvrdiOtkazivanjeModalComponent } from './potvrdi-otkazivanje-modal.component';

describe('PotvrdiOtkazivanjeModalComponent', () => {
  let component: PotvrdiOtkazivanjeModalComponent;
  let fixture: ComponentFixture<PotvrdiOtkazivanjeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotvrdiOtkazivanjeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotvrdiOtkazivanjeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
