import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcijeniAviokompanijuComponent } from './ocijeni-aviokompaniju.component';

describe('OcijeniAviokompanijuComponent', () => {
  let component: OcijeniAviokompanijuComponent;
  let fixture: ComponentFixture<OcijeniAviokompanijuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcijeniAviokompanijuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcijeniAviokompanijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
