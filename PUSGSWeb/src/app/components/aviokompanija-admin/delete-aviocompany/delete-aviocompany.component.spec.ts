import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAviocompanyComponent } from './delete-aviocompany.component';

describe('DeleteAviocompanyComponent', () => {
  let component: DeleteAviocompanyComponent;
  let fixture: ComponentFixture<DeleteAviocompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAviocompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAviocompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
