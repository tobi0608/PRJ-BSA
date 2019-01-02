import {Component, OnInit} from '@angular/core';
import {PATIENTS} from '../../mock-files/mock-patients';
import {Router} from '@angular/router';

let ownPatients = [];
let user = [];

@Component({
    selector: 'app-patient-list',
    templateUrl: './patient-list.component.html',
    styleUrls: ['./patient-list.component.scss']
})

export class PatientListComponent implements OnInit {
    patients;

    constructor(public router: Router) { }

    ngOnInit() {
        user = document.cookie.split(',');
        ownPatients = [];
        PATIENTS.forEach(function (value) {
            if (value.assignedDoc.toString() === user[0]) {
                ownPatients.push(value);
            }
        });
        this.patients = ownPatients;
    }

    onAddPatient(): void {
        this.router.navigate(['doctor/patients/record/:new']);
    }

    onSelect(patient): void {
        this.router.navigate(['doctor/patients/record/:' + patient.sv]);
    }

    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
