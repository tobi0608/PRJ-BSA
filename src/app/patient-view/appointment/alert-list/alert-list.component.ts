import { Component, OnInit } from '@angular/core';
import {MESSAGES} from '../../../mock-files/mock-messages';
import {USERS} from '../../../mock-files/mock-user';
import {DATES} from '../../../mock-files/mock-vital-parameter';

const alerts = [];

MESSAGES.forEach(function (value) {
    if (value.sv.toString() === document.cookie) {
        if (value.sv_doc.toString() === '2167050980') {
            if (value.from === 'Doc') {
                alerts.push(value);
            }
        }
    }
});

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {
  messages = alerts;
  constructor() { }

  ngOnInit() {
      USERS.find(function (tmp) {
          if (tmp.sv.toString() === document.cookie) {
              console.log('ok Access', document.cookie);
              return true;
          } else {
              console.log('no access', document.cookie);
              document.getElementById('loginSite').style.display = 'none';
              document.getElementById('noAccess').style.display = 'block';
          }
      });
  }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
