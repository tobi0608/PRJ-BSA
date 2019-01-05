import { Component, OnInit } from '@angular/core';
import {MESSAGES} from '../../../mock-files/mock-messages';
import {USERS} from '../../../mock-files/mock-user';

let alerts = [];

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {
  messages;
  constructor() { }

  ngOnInit() {
      const user = document.cookie.split(',');

      USERS.find(function (tmp) {
          if (tmp.sv.toString() === user[0] && tmp.type == 'patient') {
              return true;
          } else {
              document.getElementById('loginSite').style.display = 'none';
              document.getElementById('noAccess').style.display = 'block';
          }
      });
      alerts = [];
      MESSAGES.forEach(function (value) {
          if (value.svTo.toString() === user[0] && value.svFrom.toString() === user[4]) {
              alerts.push(value);
          }
      });
      this.messages = alerts;
  }
    onSeen(message): void {
        message.seen = ' ';
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
