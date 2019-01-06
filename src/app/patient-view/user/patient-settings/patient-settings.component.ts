import {Component, OnInit, ViewChild} from '@angular/core';
import {USERS} from '../../../mock-files/mock-user';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {GetDocsSVs} from './functions/GetDocsSVs';

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
    Docs;
  constructor() { }

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
                        tmp.doctor_sv = newDoc;
                        alert('Ihr Arzt wurde geändert!');
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

    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
