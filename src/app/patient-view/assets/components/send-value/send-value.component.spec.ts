import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SendValueComponent} from './send-value.component';

describe('SendValueComponent', () => {
    let component: SendValueComponent;
    let fixture: ComponentFixture<SendValueComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SendValueComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SendValueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
