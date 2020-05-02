import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviokompanijaProfilComponent } from './aviokompanija-profil.component';

describe('AviokompanijaProfilComponent', () => {
  let component: AviokompanijaProfilComponent;
  let fixture: ComponentFixture<AviokompanijaProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviokompanijaProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviokompanijaProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
