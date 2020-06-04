import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAviocompanyComponent } from './get-aviocompany.component';

describe('GetAviocompanyComponent', () => {
  let component: GetAviocompanyComponent;
  let fixture: ComponentFixture<GetAviocompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAviocompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAviocompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
