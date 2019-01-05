import {Component, OnInit, ViewChild} from '@angular/core';
import {USERS} from '../mock-files/mock-user';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home-view',
    templateUrl: './home-view.component.html',
    styleUrls: ['./home-view.component.scss'],
})

export class HomeViewComponent implements OnInit {
    @ViewChild('sv') sv;
    @ViewChild('password') password;

    constructor(public router: Router) {}

    ngOnInit() {
    }
    onLogIn(): void {
        const site = this.router;
        const sv = this.sv.nativeElement.value;
        const password = this.password.nativeElement.value;
        let count = 0;
        USERS.find(function (value) {
            count++;
            if (value.sv.toString() === sv.toString()) {
                if (value.password === password) {
                    document.cookie = value.sv.toString() + ',' + value.type + ',' + value.first_name +
                        ',' + value.last_name + ',' + value.doctor_sv.toString() + ',';
                    console.log(document.cookie);
                    site.navigate([value.type + '/dashboard']);
                    return true;
                } else {
                    alert('Falsches Passwort!');
                    return true;
                }
            } else {
                if (count === USERS.length) {
                    alert('Falsche Sozialversicherungsnummer!');
                    return true;
                }
            }
        });
    }

}
