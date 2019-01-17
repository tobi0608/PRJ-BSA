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
    /**
     * Objekt mit den zugewiesenen Patienten
     */
    patients;

    constructor(public router: Router) {
    }

    ngOnInit() {
        LogInCheck('doctor');
        this.patients = ShowOwnPatients();
    }

    /**
     * Weiterleitung für hinzufügen eines neuen Users
     */
    onAddPatient(): void {
        this.router.navigate(['doctor/patients/record/:new']);
    }

    /**
     * Weiterleitung zum ausgewählten Patienten
     * @param patient ausgewählter Patient
     */
    onSelect(patient): void {
        this.router.navigate(['doctor/patients/record/:' + patient.sv]);
    }
}
