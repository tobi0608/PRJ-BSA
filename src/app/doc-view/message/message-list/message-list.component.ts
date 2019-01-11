import { Component, OnInit } from '@angular/core';
import {MESSAGES} from '../../../mock-files/mock-messages';
import {Message} from '../../../mock-files/messages';
import {Router} from '@angular/router';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {MessageFilter} from '../../../global-files/function/MessageFilter';

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
        message.seen = ' ';
        message.check = ' ';
        message.times = ' ';
        const tmp: Message = {
            svFrom: parseInt(localStorage.getItem('sv'), 10),
            svTo: parseInt(message.svFrom, 10),
            first_name: localStorage.getItem('firstName'),
            last_name: localStorage.getItem('lastName'),
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
        message.seen = ' ';
        message.check = ' ';
        message.times = ' ';
        const tmp: Message = {
            svFrom: parseInt(localStorage.getItem('sv'), 10),
            svTo: parseInt(message.svFrom, 10),
            first_name: localStorage.getItem('firstName'),
            last_name: localStorage.getItem('lastName'),
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
}
