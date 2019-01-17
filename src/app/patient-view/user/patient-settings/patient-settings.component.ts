import {Component, OnInit} from '@angular/core';
import {USERS} from '../../../mock-files/mock-user';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {GetDocsSVs} from './functions/GetDocsSVs';
import {MESSAGES} from '../../../mock-files/mock-messages';
import {Message} from '../../../mock-files/messages';

@Component({
    selector: 'app-patient-settings',
    templateUrl: './patient-settings.component.html',
    styleUrls: ['./patient-settings.component.scss']
})
export class PatientSettingsComponent implements OnInit {
    /**
     * Objekt mit allen Ärzten
     */
    Docs;

    constructor() {
    }

    ngOnInit() {
        LogInCheck('patient');
        this.Docs = GetDocsSVs();
    }

    /**
     * Ändert den zugewiesenen Arzt und benachritet ihn
     * @param sv SV des ausgewählten Arztes
     */
    newDoctor(sv): void {
        USERS.find(function (tmp) {
            if (tmp.sv.toString() === localStorage.getItem('sv')) {
                tmp.assignedDoc = parseInt(sv, 10);
                localStorage.setItem('DocSV', tmp.assignedDoc.toString());
                alert('Ihr Arzt wurde geändert!');
                const msg: Message = {
                    svFrom: parseInt(localStorage.getItem('sv'), 10),
                    svTo: parseInt(sv, 10),
                    first_name: localStorage.getItem('firstName'),
                    last_name: localStorage.getItem('lastName'),
                    type: 'NewPat',
                    text: 'Ein neuer Patient hat Sie als Arzt zugewiesen!',
                    timestamp: Date.now(),
                    seen: 'bell',
                    check: ' ',
                    times: ' ',
                    info: ''
                };
                MESSAGES.unshift(msg);
                return true;
            }
        });
    }
}
