import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarUserPatientComponent} from './navbar-user-patient.component';

describe('NavbarUserPatientComponent', () => {
    let component: NavbarUserPatientComponent;
    let fixture: ComponentFixture<NavbarUserPatientComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavbarUserPatientComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarUserPatientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
