import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationInformationComponent } from './medication-information.component';

describe('MedicationInformationComponent', () => {
  let component: MedicationInformationComponent;
  let fixture: ComponentFixture<MedicationInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
