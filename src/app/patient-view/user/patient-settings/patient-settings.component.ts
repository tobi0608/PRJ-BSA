import {Component, OnInit} from '@angular/core';
import {USERS} from '../../../mock-files/mock-user';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {GetDocsSVs} from './functions/GetDocsSVs';

@Component({
    selector: 'app-patient-settings',
    templateUrl: './patient-settings.component.html',
    styleUrls: ['./patient-settings.component.scss']
})
export class PatientSettingsComponent implements OnInit {
    Docs;

    constructor() {
    }

    ngOnInit() {
        LogInCheck('patient');
        this.Docs = GetDocsSVs();
    }

    newDoctor(array): void {
        USERS.find(function (tmp) {
            if (tmp.sv.toString() === localStorage.getItem('sv')) {
                tmp.doctor_sv = parseInt(array.sv, 10);
                localStorage.setItem('DocSV', tmp.doctor_sv.toString());
                alert('Ihr Arzt wurde geändert!');
                return true;
            }
        });
    }
}
