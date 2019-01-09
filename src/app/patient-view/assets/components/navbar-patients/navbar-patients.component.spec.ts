import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPatientsComponent } from './navbar-patients.component';

describe('NavbarPatientsComponent', () => {
  let component: NavbarPatientsComponent;
  let fixture: ComponentFixture<NavbarPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
