import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRentacarServiceComponent } from './edit-rentacar-service.component';

describe('EditRentacarServiceComponent', () => {
  let component: EditRentacarServiceComponent;
  let fixture: ComponentFixture<EditRentacarServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRentacarServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRentacarServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
