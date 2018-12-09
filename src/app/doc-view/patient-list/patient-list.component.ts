import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {PATIENTS} from '../../mock-files/mock-patients';
import {Patient} from '../../mock-files/patients';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})

export class PatientListComponent implements OnInit {
  patients = PATIENTS;
  selectedPatient: Patient;
  @ViewChild('generalSection') generalSection;
  @ViewChild('newPatientSection') newPatientSection;
  @ViewChild('detailSection') detailSection;

  @ViewChild('changeOn') changeOn;
  @ViewChild('changeOff') changeOff;

  @ViewChild('changeAge') changeAge;
  @ViewChild('changeLastVisit') changeLastVisit;
  @ViewChild('changeCurrentMedication') changeCurrentMedication;
  @ViewChild('changeMedicationInterval') changeMedicationInterval;
  @ViewChild('changeUsedMedication') changeUsedMedication;

  constructor() { }

  ngOnInit() {
  }

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
    this.generalSection.nativeElement.style.display = 'none';
    this.detailSection.nativeElement.style.display = 'block';
  }
  onAddBtn(): void {
    this.newPatientSection.nativeElement.style.display = 'block';
    this.generalSection.nativeElement.style.display = 'none';
  }
  onBackBtn(): void {
    this.generalSection.nativeElement.style.display = 'block';
    this.newPatientSection.nativeElement.style.display = 'none';
    this.detailSection.nativeElement.style.display = 'none';
  }
  onChangeBtn(): void{
        this.changeOff.nativeElement.style.display = 'block';
        this.changeOn.nativeElement.style.display = 'none';
        this.changeAge.nativeElement.disabled = false;
        this.changeLastVisit.nativeElement.disabled = false;
        this.changeCurrentMedication.nativeElement.disabled = false;
        this.changeMedicationInterval.nativeElement.disabled = false;
        this.changeUsedMedication.nativeElement.disabled = false;
    }
    offChangeBtn(): void{
        this.changeOff.nativeElement.style.display = 'none';
        this.changeOn.nativeElement.style.display = 'block';
        this.changeAge.nativeElement.disabled = true;
        this.changeLastVisit.nativeElement.disabled = true;
        this.changeCurrentMedication.nativeElement.disabled = true;
        this.changeMedicationInterval.nativeElement.disabled = true;
        this.changeUsedMedication.nativeElement.disabled = true;
    }
}
