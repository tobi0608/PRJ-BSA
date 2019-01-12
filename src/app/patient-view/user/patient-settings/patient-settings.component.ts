import {Component, OnInit, ViewChild} from '@angular/core';
import {USERS} from '../../../mock-files/mock-user';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {GetDocsSVs} from './functions/GetDocsSVs';

@Component({
    selector: 'app-patient-settings',
    templateUrl: './patient-settings.component.html',
    styleUrls: ['./patient-settings.component.scss']
})
export class PatientSettingsComponent implements OnInit {
    @ViewChild('newDocForm') newDocForm;
    newDoc;
    Docs;
    constructor() {}
    ngOnInit() {
        LogInCheck('patient');
        this.Docs = GetDocsSVs();
    }

    newDoctor(): void {
        const newDoc = this.newDoc;
        if (this.newDocForm.form.valid) {
            USERS.find(function (tmp) {
                if (tmp.sv.toString() === localStorage.getItem('sv')) {
                        tmp.doctor_sv = parseInt(newDoc, 10);
                    localStorage.setItem('DocSV', tmp.doctor_sv.toString());
                        alert('Ihr Arzt wurde geändert!');
                        return true;
                }
            });
        }
    }
}
