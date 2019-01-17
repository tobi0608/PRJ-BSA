import {Component, OnInit} from '@angular/core';
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
    /**
     * Objekte für die einzelnen Nachrichten Kategorien
     */
    messages;
    acceptMessages;
    deniedMessages;

    constructor(public router: Router) {
    }

    ngOnInit() {
        LogInCheck('doctor');
        this.messages = MessageFilter('request');
        this.acceptMessages = MessageFilter('accept');
        this.deniedMessages = MessageFilter('denied');
    }

    /**
     * Arzt wird zum ausgewählten Patienten weitergeleitet
     * @param sv Übergibt ausgewählte sv
     */
    onSelect(sv): void {
        if (sv) {
            this.router.navigate(['doctor/patients/record/:' + sv]);
        }
    }

    /**
     * Ausgewählte Anfrage wird aktzeptiert und sendet Benachrichtigung an User
     * @param message Übergibt ausgewählte Nachricht
     */
    onAccept(message): void {
        message.seen = ' ';
        message.info = 'accept';
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
            times: ' ',
            info: ' '
        };
        MESSAGES.unshift(tmp);
        alert('Der Termin wurde bestätigt!');
        this.ngOnInit();
    }

    /**
     * Ausgewählte Anfrage wird abgelehnt und sendet Benachrichtigung an User
     * @param message Übergibt ausgewählte Nachricht
     */
    onDenied(message): void {
        message.seen = ' ';
        message.info = 'denied';
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
            times: ' ',
            info: ' '
        };
        MESSAGES.unshift(tmp);
        alert('Der Termin wurde abgelehnt!');
        this.ngOnInit();
    }
}
