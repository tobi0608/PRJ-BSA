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
    @ViewChild('newPasswordForm') newPasswordForm;
    oldPW;
    newPW;
    repeatPW;
    newDoc;
    Docs;
    constructor() {}
    ngOnInit() {
        LogInCheck('patient');
        this.Docs = GetDocsSVs();
    }

    newDoctor(): void {
        if (this.newDocForm.form.valid) {
            USERS.find(function (tmp) {
                if (tmp.sv.toString() === localStorage.getItem('sv')) {
                        tmp.doctor_sv = parseInt(this.newDoc, 10);
                        alert('Ihr Arzt wurde geändert!');
                        return true;
                }
            });
        }
    }

    newPassword(): void {
        const newPW =  this.newPW;
        const oldPW = this.oldPW;
        const repeatPW = this.repeatPW;
        USERS.find(function (tmp) {
            if (tmp.sv.toString() === localStorage.getItem('sv')) {
                if (tmp.password === oldPW) {
                    if (newPW === repeatPW) {
                        tmp.password = newPW;
                        alert('Ihr Passwort wurde geändert!');
                        return true;
                    }
                }
            }
        });
    }
}
