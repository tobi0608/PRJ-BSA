import { Component, OnInit } from '@angular/core';
import {MESSAGES} from '../../../mock-files/mock-messages';
import {USERS} from '../../../mock-files/mock-user';

const alerts = [ ];

MESSAGES.forEach(function (value) {
    if (value.sv.toString() === document.cookie && value.sv_doc.toString() === '2167050980' && value.from === 'Doc') {
        alerts.push(value);
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
    onSeen(message): void {
        message.seen = ' ';
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
