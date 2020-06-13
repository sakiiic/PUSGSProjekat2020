import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcijeniLetComponent } from './ocijeni-let.component';

describe('OcijeniLetComponent', () => {
  let component: OcijeniLetComponent;
  let fixture: ComponentFixture<OcijeniLetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcijeniLetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcijeniLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
