import {Component, OnInit, ViewChild} from '@angular/core';
import {PATIENTS} from '../../mock-patients';
import {Patient} from '../../patients';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})

export class PatientListComponent implements OnInit {
  patients = PATIENTS;
  selectedPatient: Patient;
  patientCount = PATIENTS.length;
  @ViewChild('newPatientSection') newPatientSection;
  @ViewChild('changeRecord') changeRecord;
  @ViewChild('defaultRecord') defaultRecord;

  constructor() { }

  ngOnInit() {
  }

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
  }
  onAddBtn(): void {
        console.log('test');
        this.newPatientSection.nativeElement.style.display = 'block';
  }
  onChangeBtn(): void{
        this.changeRecord.nativeElement.style.display = 'block';
        this.defaultRecord.nativeElement.style.display = 'none';
  }
}
