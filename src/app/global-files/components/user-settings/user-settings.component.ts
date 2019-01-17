import {Component, OnInit} from '@angular/core';
import {USERS} from '../../../mock-files/mock-user';
import {GetUserData} from '../../function/GetUserData';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-settings',
    templateUrl: './user-settings.component.html',
    styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
    /**
     * Objekt für Übergabe des Vornamen des Users
     */
    firstName;
    /**
     * Objekt für Übergabe des Nachnamen des Users
     */
    lastName;
    /**
     * Objekt für Übergabe der E-Mail des Users
     */
    email;

    constructor(public router: Router) {
    }

    ngOnInit() {
        const sv = localStorage.getItem('sv');
        const user = GetUserData(sv);
        this.firstName = user.first_name;
        this.lastName = user.last_name;
        this.email = user.email;
    }

    /**
     * Umstellung des Passworts
     * @param array Array mit den angegebenen Passwörtern
     */
    newPassword(array): void {
        const newPW = array.newPW;
        const oldPW = array.oldPW;
        const repeatPW = array.repeatPW;
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

    /**
     * Speichert die geänderte Information
     * @param filter Zuweisung welches Information geändert wird
     */
    saveInformation(filter): void {
        const user = USERS.find(function (tmp) {
            return tmp.sv.toString() === localStorage.getItem('sv');
        });
        switch (filter) {
            case 'firstName':
                user.first_name = this.firstName;
                localStorage.setItem('firstName', user.first_name);
                alert('Ihr Vorname wurde geändert!');
                break;
            case 'lastName':
                user.last_name = this.lastName;
                localStorage.setItem('lastName', user.last_name);
                alert('Ihr Nachname wurde geändert!');
                break;
            case 'email':
                user.email = this.email;
                alert('Ihre E-Mail wurde geändert!');
                break;
        }
    }

    /**
     * Löscht derzeit verwendeten User
     */
    deleteUser(): void {
        if (confirm('Hiermit deaktivieren Sie ihr Konto!')) {
            console.log(USERS);
            const user = USERS.find(function (tmp) {
                return tmp.sv.toString() === localStorage.getItem('sv');
            });
            USERS.splice(USERS.indexOf(user), 1);
            console.log(USERS);
            localStorage.clear();
            this.router.navigate(['home']);
        }
    }
}
