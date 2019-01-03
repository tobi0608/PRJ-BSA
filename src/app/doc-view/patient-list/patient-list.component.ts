import {Component, OnInit} from '@angular/core';
import {PATIENTS} from '../../mock-files/mock-patients';
import {Router} from '@angular/router';
import {USERS} from '../../mock-files/mock-user';

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
        let count = 0;
        USERS.find(function (tmp) {
            count++;
            if (tmp.sv.toString() === user[0] && tmp.type === 'doctor') {
                return true;
            } else {
                if (count === USERS.length) {
                    document.getElementById('loginSite').style.display = 'none';
                    document.getElementById('noAccess').style.display = 'block';
                    return true;
                }
            }
        });
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
