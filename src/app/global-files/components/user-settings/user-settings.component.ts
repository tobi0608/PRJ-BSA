import {Component, OnInit} from '@angular/core';
import {USERS} from '../../../mock-files/mock-user';
import {GetUserData} from '../../function/GetUserData';

@Component({
    selector: 'app-user-settings',
    templateUrl: './user-settings.component.html',
    styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
    oldPW;
    newPW;
    repeatPW;
    firstName;
    lastName;
    email;

    constructor() { }

    ngOnInit() {
        const sv = localStorage.getItem('sv');
        const user = GetUserData(sv);
        this.firstName = user.first_name;
        this.lastName = user.last_name;
        this.email = user.email;
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
    saveInformation(filter): void {
        const user = USERS.find(function (tmp) {
            return tmp.sv.toString() === localStorage.getItem('sv');
        });
        switch (filter) {
            case 'firstName':
                    user.first_name = this.firstName;
                    localStorage.setItem('firstName', user.first_name);
                    console.log('test');
                break;
            case 'lastName':
                    user.last_name = this.lastName;
                    localStorage.setItem('lastName', user.last_name);
                break;
            case 'email':
                    user.email = this.email;
                break;
        }
    }
    deleteUser(): void {
    }
}
