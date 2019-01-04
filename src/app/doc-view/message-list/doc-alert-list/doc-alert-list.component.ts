import { Component, OnInit } from '@angular/core';
import {MESSAGES} from '../../../mock-files/mock-messages';
import {USERS} from '../../../mock-files/mock-user';
import {Router} from '@angular/router';

let user = [];
let patAlert = [];

@Component({
  selector: 'app-doc-alert-list',
  templateUrl: './doc-alert-list.component.html',
  styleUrls: ['./doc-alert-list.component.scss']
})
export class DocAlertListComponent implements OnInit {
    alerts;

  constructor(public router: Router) { }

  ngOnInit() {
      user = document.cookie.split(',');
      let count = 0;
      USERS.find(function (tmp) {
          count++;
          if (tmp.sv.toString() === user[0] && tmp.type === 'doctor') {
              return true;
          } else {
              if (count === USERS.length) {
                  document.getElementById('loginSite').style.display = 'none';
                  document.getElementById('noAccess').style.display = 'block';
                  return true;
              }
          }
      });

      patAlert = [];
      MESSAGES.forEach(function (value) {
          if (value.svTo.toString() === user[0] && value.type === 'Bluthochdruck') {
              patAlert.push(value);
          }
      });
      this.alerts = patAlert;
  }
    onSelect(patient): void {
        this.router.navigate(['doctor/patients/record/:' + patient]);
    }

    onSeen(alert): void {
        alert.seen = ' ';
    }

    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
