import {Component, OnInit, ViewChild} from '@angular/core';
import {PATIENTS} from '../../mock-files/mock-patients';
import {Patient} from '../../mock-files/patients';
import {DATES} from '../../mock-files/mock-vital-parameter';

@Component({
    selector: 'app-patient-list',
    templateUrl: './patient-list.component.html',
    styleUrls: ['./patient-list.component.scss']
})

export class PatientListComponent implements OnInit {
    patients = PATIENTS;
    selectedPatient: Patient;
    dates = DATES;

    @ViewChild('generalSection') generalSection;
    @ViewChild('newPatientSection') newPatientSection;
    @ViewChild('detailSection') detailSection;

    @ViewChild('changeOn') changeOn;
    @ViewChild('changeOff') changeOff;
    @ViewChild('saveBtn') saveBtn;

    @ViewChild('changeAge') changeAge;
    @ViewChild('changeLastVisit') changeLastVisit;
    @ViewChild('changeCurrentMedication') changeCurrentMedication;
    @ViewChild('changeMedicationInterval') changeMedicationInterval;
    @ViewChild('changeUsedMedication') changeUsedMedication;

    @ViewChild('sv') sv;
    @ViewChild('firstName') firstName;
    @ViewChild('lastName') lastName;
    @ViewChild('age') age;
    @ViewChild('gender') gender;
    @ViewChild('lastVisit') lastVisit;
    @ViewChild('registered') registered;
    @ViewChild('currentMedication') currentMedication;
    @ViewChild('medicationInterval') medicationInterval;
    @ViewChild('usedMedication') usedMedication;

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
    onAddPatientBtn(): void {
        const sv = this.sv.nativeElement.value;
        const firstName = this.firstName.nativeElement.value;
        const lastName = this.lastName.nativeElement.value;
        const age = this.age.nativeElement.value;
        const gender = this.gender.nativeElement.value;
        const lastVisit = this.lastVisit.nativeElement.value;
        const registered = this.registered.nativeElement.value;
        const currentMedication = this.currentMedication.nativeElement.value;
        const medicationInterval = this.medicationInterval.nativeElement.value;
        const usedMedication = this.usedMedication.nativeElement.value;
        const tmp: Patient = {
            sv: sv,
            first_name: firstName,
            last_name: lastName,
            gender: gender,
            age: age,
            registered: registered,
            last_visit: lastVisit,
            current_medication: currentMedication,
            medication_interval: medicationInterval,
            used_medication: usedMedication
        };
        PATIENTS.unshift(tmp);

        this.generalSection.nativeElement.style.display = 'block';
        this.newPatientSection.nativeElement.style.display = 'none';
        this.detailSection.nativeElement.style.display = 'none';
    }

    onBackBtn(): void {
        this.generalSection.nativeElement.style.display = 'block';
        this.newPatientSection.nativeElement.style.display = 'none';
        this.detailSection.nativeElement.style.display = 'none';
    }
    onChangeBtn(): void {
        this.changeOff.nativeElement.style.display = 'block';
        this.changeOn.nativeElement.style.display = 'none';
        this.saveBtn.nativeElement.style.display = 'block';
        this.changeAge.nativeElement.disabled = false;
        this.changeLastVisit.nativeElement.disabled = false;
        this.changeCurrentMedication.nativeElement.disabled = false;
        this.changeMedicationInterval.nativeElement.disabled = false;
        this.changeUsedMedication.nativeElement.disabled = false;
    }
    offChangeBtn(): void {
        this.changeOff.nativeElement.style.display = 'none';
        this.changeOn.nativeElement.style.display = 'block';
        this.saveBtn.nativeElement.style.display = 'none';
        this.changeAge.nativeElement.disabled = true;
        this.changeLastVisit.nativeElement.disabled = true;
        this.changeCurrentMedication.nativeElement.disabled = true;
        this.changeMedicationInterval.nativeElement.disabled = true;
        this.changeUsedMedication.nativeElement.disabled = true;
    }
}
