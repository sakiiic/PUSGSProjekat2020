import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdmininfoComponent } from './get-admininfo.component';

describe('GetAdmininfoComponent', () => {
  let component: GetAdmininfoComponent;
  let fixture: ComponentFixture<GetAdmininfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAdmininfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAdmininfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
