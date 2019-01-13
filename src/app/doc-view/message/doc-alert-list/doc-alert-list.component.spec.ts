import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocAlertListComponent} from './doc-alert-list.component';

describe('DocAlertListComponent', () => {
    let component: DocAlertListComponent;
    let fixture: ComponentFixture<DocAlertListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DocAlertListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DocAlertListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
