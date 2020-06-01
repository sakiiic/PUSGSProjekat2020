import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRentacarServiceComponent } from './get-rentacar-service.component';

describe('GetRentacarServiceComponent', () => {
  let component: GetRentacarServiceComponent;
  let fixture: ComponentFixture<GetRentacarServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRentacarServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRentacarServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
