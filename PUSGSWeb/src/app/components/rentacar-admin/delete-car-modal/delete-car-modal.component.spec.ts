import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCarModalComponent } from './delete-car-modal.component';

describe('DeleteCarModalComponent', () => {
  let component: DeleteCarModalComponent;
  let fixture: ComponentFixture<DeleteCarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
