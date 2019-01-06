import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {ShowOwnPatients} from './functions/ShowOwnPatients';

@Component({
    selector: 'app-patient-list',
    templateUrl: './patient-list.component.html',
    styleUrls: ['./patient-list.component.scss']
})

export class PatientListComponent implements OnInit {
    patients;

    constructor(public router: Router) { }

    ngOnInit() {
        LogInCheck('doctor');
        this.patients = ShowOwnPatients();
    }
    onAddPatient(): void {
        this.router.navigate(['doctor/patients/record/:new']);
    }
    onSelect(patient): void {
        this.router.navigate(['doctor/patients/record/:' + patient.sv]);
    }
    onRoute(route): void {
        this.router.navigate([route]);
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
