import {Component, OnInit, ViewChild} from '@angular/core';
import { USERS } from '../mock-files/mock-user';
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
        let navigationPatient = this.password.nativeElement.style.display;
        USERS.forEach(function (value) {
            if (value.sv == sv) {
                if (value.password == password) {
                    if (value.type == 'patient'){
                        console.log('test');
                    }
                    console.log(value.type + '/dashboard');
                    site.navigate([value.type + '/dashboard']);
                }}
        });

    }

}
