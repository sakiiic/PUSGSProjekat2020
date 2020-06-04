import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAviocompanyComponent } from './edit-aviocompany.component';

describe('EditAviocompanyComponent', () => {
  let component: EditAviocompanyComponent;
  let fixture: ComponentFixture<EditAviocompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAviocompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAviocompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
