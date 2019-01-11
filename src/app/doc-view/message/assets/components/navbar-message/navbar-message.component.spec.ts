import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMessageComponent } from './navbar-message.component';

describe('NavbarMessageComponent', () => {
  let component: NavbarMessageComponent;
  let fixture: ComponentFixture<NavbarMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
