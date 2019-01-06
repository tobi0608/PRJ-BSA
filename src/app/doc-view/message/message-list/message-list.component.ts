import { Component, OnInit } from '@angular/core';
import {MESSAGES} from '../../../mock-files/mock-messages';
import {Message} from '../../../mock-files/messages';
import {Router} from '@angular/router';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {MessageFilter} from '../../../global-files/function/MessageFilter';

let user = [];

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
    messages;

    constructor(public router: Router) { }

    ngOnInit() {
        LogInCheck('doctor');
        this.messages = MessageFilter('Termin');
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
        console.log(tmp);
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
    }
}
