import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentacarServiceComponent } from './add-rentacar-service.component';

describe('AddRentacarServiceComponent', () => {
  let component: AddRentacarServiceComponent;
  let fixture: ComponentFixture<AddRentacarServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRentacarServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRentacarServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
