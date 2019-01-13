import {Component, OnInit, ViewChild} from '@angular/core';
import {USERS} from '../mock-files/mock-user';
import {Router} from '@angular/router';
import {User} from '../mock-files/user';

@Component({
    selector: 'app-home-view',
    templateUrl: './home-view.component.html',
    styleUrls: ['./home-view.component.scss'],
})

export class HomeViewComponent implements OnInit {
    @ViewChild('logInForm') logInForm;

    constructor(public router: Router) {
    }

    ngOnInit() {
    }

    onLogIn(array): void {
        const site = this.router;
        const user = USERS.find(function (tmp) {
            return tmp.sv.toString() === array.username;
        });
        if (!user) {
            alert('Falsche Sozialversicherungsnummer!');
            return;
        }
        if (user.password === array.password) {
            localStorage.setItem('sv', user.sv.toString());
            localStorage.setItem('type', user.type);
            localStorage.setItem('firstName', user.first_name);
            localStorage.setItem('lastName', user.last_name);
            localStorage.setItem('DocSV', user.assignedDoc.toString());
            site.navigate([user.type + '/dashboard']);
        } else {
            alert('Falsches Passwort!');
        }
    }
    newUser(array): void {
        const sv = USERS.find(function (tmp) {
            return tmp.sv.toString() === array.sv;
        });
        console.log(array);
        if (!sv) {
            const tmp: User = {
                sv: parseInt(array.sv, 10),
                password: array.pw,
                first_name: array.firstName,
                last_name: array.lastName,
                email: array.email,
                type: array.type,
                assignedDoc: 0,
                registered: Date.now(),
                gender: array.gender,
                last_visit: Date.now()
            };
            USERS.unshift(tmp);
            alert('Sie haben sich erfolgreich registriert!');
            this.logInForm.form.value.username = array.sv;
            this.logInForm.form.value.password = array.pw;
            this.onLogIn(this.logInForm.value);
            return;
        } else {
            alert('Der User wurde bereits angelegt!');
            return;
        }
    }

    onTest(filter): void {
        switch (filter) {
            case 'patient':
                const patient = {
                    username: '3198060896',
                    password: 'root'
                };
                this.onLogIn(patient);
                break;
            case 'doc':
                const doc = {
                    username: '2167050980',
                    password: 'root'
                };
                this.onLogIn(doc);
                break;
        }
    }
}
