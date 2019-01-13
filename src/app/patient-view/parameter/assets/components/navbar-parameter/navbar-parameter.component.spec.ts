import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarParameterComponent} from './navbar-parameter.component';

describe('NavbarParameterComponent', () => {
    let component: NavbarParameterComponent;
    let fixture: ComponentFixture<NavbarParameterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavbarParameterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarParameterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
