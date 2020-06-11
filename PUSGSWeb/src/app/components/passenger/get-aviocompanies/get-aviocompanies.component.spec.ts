import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAviocompaniesComponent } from './get-aviocompanies.component';

describe('GetAviocompaniesComponent', () => {
  let component: GetAviocompaniesComponent;
  let fixture: ComponentFixture<GetAviocompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAviocompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAviocompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
