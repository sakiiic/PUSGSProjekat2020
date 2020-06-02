import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAviocompanyComponent } from './add-aviocompany.component';

describe('AddAviocompanyComponent', () => {
  let component: AddAviocompanyComponent;
  let fixture: ComponentFixture<AddAviocompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAviocompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAviocompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
