import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {MessageFilter} from '../../../global-files/function/MessageFilter';

@Component({
    selector: 'app-doc-alert-list',
    templateUrl: './doc-alert-list.component.html',
    styleUrls: ['./doc-alert-list.component.scss']
})
export class DocAlertListComponent implements OnInit {
    /**
     * Objekt mit den gewünschten Nachrichten
     */
    alerts;

    constructor(public router: Router) {
    }

    ngOnInit() {
        LogInCheck('doctor');
        this.alerts = MessageFilter('alerts');
    }

    /**
     * Ausgewählte Nachrichten werden als gesehen markiert und der Empfänger wird zu den Daten des Senders geleitet
     * @param alert Übergibt ausgewählte Nachricht
     */
    onSelect(alert): void {
        alert.seen = ' ';
        this.router.navigate(['doctor/patients/record/:' + alert.svFrom]);
    }
}
