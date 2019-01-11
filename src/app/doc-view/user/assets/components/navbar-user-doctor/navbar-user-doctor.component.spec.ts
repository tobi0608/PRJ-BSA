import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUserDoctorComponent } from './navbar-user-doctor.component';

describe('NavbarUserDoctorComponent', () => {
  let component: NavbarUserDoctorComponent;
  let fixture: ComponentFixture<NavbarUserDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarUserDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUserDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
