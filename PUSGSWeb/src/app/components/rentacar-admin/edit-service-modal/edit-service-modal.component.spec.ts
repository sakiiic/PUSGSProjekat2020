import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceModalComponent } from './edit-service-modal.component';

describe('EditServiceModalComponent', () => {
  let component: EditServiceModalComponent;
  let fixture: ComponentFixture<EditServiceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
