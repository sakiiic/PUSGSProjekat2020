import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdmininfoComponent } from './edit-admininfo.component';

describe('EditAdmininfoComponent', () => {
  let component: EditAdmininfoComponent;
  let fixture: ComponentFixture<EditAdmininfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdmininfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdmininfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
