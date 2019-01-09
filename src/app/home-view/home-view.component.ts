import {Component, OnInit, ViewChild} from '@angular/core';
import {USERS} from '../mock-files/mock-user';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home-view',
    templateUrl: './home-view.component.html',
    styleUrls: ['./home-view.component.scss'],
})

export class HomeViewComponent implements OnInit {
    username;
    password;
    @ViewChild('logInForm') logInForm;

    constructor(public router: Router) {}

    ngOnInit() {
    }
    onLogIn(): void {
        const site = this.router;
        const sv = this.username;
        const password = this.password;
        if (this.logInForm.form.valid) {
        const user = USERS.find(function (tmp) {
            return tmp.sv.toString() === sv.toString();
        });
            if (!user) {
                alert('Falsche Sozialversicherungsnummer!');
                return;
            }
            if (user.password === password) {
                localStorage.setItem('sv', user.sv.toString());
                localStorage.setItem('type', user.type);
                localStorage.setItem('firstName', user.first_name);
                localStorage.setItem('lastName', user.last_name);
                localStorage.setItem('DocSV', user.doctor_sv.toString());
                site.navigate([user.type + '/dashboard']);
            } else {
                alert('Falsches Passwort!');
            }
        }
    }
}
