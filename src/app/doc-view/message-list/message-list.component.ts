import { Component, OnInit } from '@angular/core';
import {MESSAGES} from '../../mock-files/mock-messages';
import {USERS} from '../../mock-files/mock-user';
import {Message} from '../../mock-files/messages';

let user = [];
let patMessage = [];

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  messages;

  constructor() { }

  ngOnInit() {
      user = document.cookie.split(',');
      console.log(user);
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

      patMessage = [];
      MESSAGES.forEach(function (value) {
          if (value.svTo.toString() === user[0] && value.type === 'Termin') {
              patMessage.push(value);
          }
      });
      this.messages = patMessage;
  }

  onAccept(message): void {
      message.seen = ' ';
      user = document.cookie.split(',');
      const tmp: Message = {
          svFrom: parseInt(user[0], 10),
          svTo: parseInt(message.svFrom, 10),
          first_name: user[2],
          last_name: user[3],
          type: 'Termin',
          text: 'Ihr Termin wurde bestätigt!',
          timestamp: Date.now(),
          seen: 'bell'
      };
      MESSAGES.unshift(tmp);
  }
    onDenied(message): void {
        message.seen = ' ';
        user = document.cookie.split(',');
        const tmp: Message = {
            svFrom: parseInt(user[0], 10),
            svTo: parseInt(message.svFrom, 10),
            first_name: user[2],
            last_name: user[3],
            type: 'Termin',
            text: 'Ihr Termin wurde abgelehnt!',
            timestamp: Date.now(),
            seen: 'bell'
        };
        MESSAGES.unshift(tmp);
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
