import {Component, OnInit, ViewChild} from '@angular/core';
import {USERS} from '../../../mock-files/mock-user';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {Router} from '@angular/router';
let user = [];

@Component({
  selector: 'app-doctor-settings',
  templateUrl: './doctor-settings.component.html',
  styleUrls: ['./doctor-settings.component.scss']
})
export class DoctorSettingsComponent implements OnInit {
    @ViewChild('oldPW') oldPW;
    @ViewChild('newPW') newPW;
    @ViewChild('repeatPW') repeatPW;
  constructor(public router: Router) { }

  ngOnInit() {
      LogInCheck('doctor');
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
                    } else {
                        alert('Ihre neuen Passwörter stimmen nicht über ein!');
                        return true;
                    }
                } else {
                    alert('Falsches Passwort!');
                    return true;
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
