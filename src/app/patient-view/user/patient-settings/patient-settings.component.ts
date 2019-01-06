import {Component, OnInit, ViewChild} from '@angular/core';
import {USERS} from '../../../mock-files/mock-user';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {GetDocsSVs} from './functions/GetDocsSVs';
import {Router} from '@angular/router';

let user = [];

@Component({
    selector: 'app-patient-settings',
    templateUrl: './patient-settings.component.html',
    styleUrls: ['./patient-settings.component.scss']
})
export class PatientSettingsComponent implements OnInit {
    @ViewChild('oldPW') oldPW;
    @ViewChild('newPW') newPW;
    @ViewChild('repeatPW') repeatPW;
    @ViewChild('newDoc') newDoc;
    @ViewChild('route') route;
    Docs;
    constructor(public router: Router) {}
    ngOnInit() {
        user = document.cookie.split(',');
        LogInCheck('patient');
        this.Docs = GetDocsSVs();
    }

    newDoctor(): void {
        const newDoc =  this.newDoc.nativeElement.value;
        USERS.find(function (tmp) {
            if (tmp.sv.toString() === user[0]) {
                if (newDoc !== '') {
                    tmp.doctor_sv = parseInt(newDoc, 10);
                    alert('Ihr Arzt wurde geändert!');
                    console.log(tmp);
                    return true;
                }
            }
        });
    }

    newPassword(): void {
        user = document.cookie.split(',');
        const newPW =  this.newPW.nativeElement.value;
        const oldPW = this.oldPW.nativeElement.value;
        const repeatPW = this.repeatPW.nativeElement.value;
        USERS.find(function (tmp) {
            if (tmp.sv.toString() === user[0]) {
                if (tmp.password === oldPW) {
                    if (newPW === repeatPW && newPW !== '' && repeatPW !== '') {
                        tmp.password = newPW;
                        alert('Ihr Passwort wurde geändert!');
                        return true;
                    }
                }
            }
        });
    }
    onRoute(route): void {
        this.router.navigate([route]);
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
