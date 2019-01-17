import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DATES} from '../../../../mock-files/mock-vital-parameter';
import {Message} from '../../../../mock-files/messages';
import {MESSAGES} from '../../../../mock-files/mock-messages';
import {VitalParameter} from '../../../../mock-files/vital-parameter';

@Component({
    selector: 'app-send-value',
    templateUrl: './send-value.component.html',
    styleUrls: ['./send-value.component.scss']
})
export class SendValueComponent implements OnInit {
    /**
     * Output für den refresh des Components für die Liste
     */
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    /**
     * Übergabe der Formular Werte an die Mockdaten und Benachrichtigung bei Hypertonie
     * @param obj Objekt mit den Werten des Formulars
     */
    onSend(obj): void {
        const systole = parseInt(obj.systole, 10);
        const diastole = parseInt(obj.diastole, 10);
        const heartRate = parseInt(obj.heartRate, 10);
        let iTen = ' ';
        if (systole > 140) {
            iTen = 'heart';
        }
        const tmp: VitalParameter = {
            sv: parseInt(localStorage.getItem('sv'), 10),
            systole: systole,
            diastole: diastole,
            heartbeat: heartRate,
            timestamp: Date.now(),
            i10: iTen
        };
        if (systole > 140) {
            const msg: Message = {
                svFrom: parseInt(localStorage.getItem('sv'), 10),
                svTo: parseInt(localStorage.getItem('DocSV'), 10),
                first_name: localStorage.getItem('firstName'),
                last_name: localStorage.getItem('lastName'),
                type: 'Bluthochdruck',
                text: 'Bluthochdruck! ' + systole + '/' + diastole + '/' + heartRate + '!',
                timestamp: Date.now(),
                seen: 'bell',
                check: ' ',
                times: ' ',
                info: ''
            };
            MESSAGES.unshift(msg);
        }
        DATES.unshift(tmp);
        this.notify.emit();
        alert('Ihre Werte wurden gespeichert');
    }
}
