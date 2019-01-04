import { Component, OnInit } from '@angular/core';
import {MESSAGES} from '../../mock-files/mock-messages';
import {USERS} from '../../mock-files/mock-user';
import {Message} from '../../mock-files/messages';
import {Router} from '@angular/router';

let user = [];
let patMessage = [];

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
    messages;

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

        patMessage = [];
        MESSAGES.forEach(function (value) {
            if (value.svTo.toString() === user[0] && value.type === 'Termin') {
                patMessage.push(value);
            }
        });
        this.messages = patMessage;
    }
    onSelect(patient): void {
        this.router.navigate(['doctor/patients/record/:' + patient]);
    }

    onAccept(message): void {
        user = document.cookie.split(',');
        message.seen = ' ';
        message.check = ' ';
        message.times = ' ';
        const tmp: Message = {
            svFrom: parseInt(user[0], 10),
            svTo: parseInt(message.svFrom, 10),
            first_name: user[2],
            last_name: user[3],
            type: 'Termin',
            text: 'Ihr Termin wurde bestätigt!',
            timestamp: Date.now(),
            seen: 'bell',
            check: ' ',
            times: ' '
        };
        MESSAGES.unshift(tmp);
        alert('Der Termin wurde bestätigt!');
    }

    onDenied(message): void {
        user = document.cookie.split(',');
        message.seen = ' ';
        message.check = ' ';
        message.times = ' ';
        const tmp: Message = {
            svFrom: parseInt(user[0], 10),
            svTo: parseInt(message.svFrom, 10),
            first_name: user[2],
            last_name: user[3],
            type: 'Termin',
            text: 'Ihr Termin wurde abgelehnt!',
            timestamp: Date.now(),
            seen: 'bell',
            check: ' ',
            times: ' '
        };
        MESSAGES.unshift(tmp);
        alert('Der Termin wurde abgelehnt!');
    }

    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
