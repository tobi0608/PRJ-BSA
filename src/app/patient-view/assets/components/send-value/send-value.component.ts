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
    systole;
    diastole;
    heartRate;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    constructor() { }

    ngOnInit() {
    }
    onSend(): void {
        const systole = parseInt(this.systole, 10);
        const diastole = parseInt(this.diastole, 10);
        const heartRate = parseInt(this.heartRate, 10);
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

        if (systole && diastole && heartRate !== null) {
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
            this.notify.emit(tmp.timestamp.toString() + ';' + systole.toString() + ';' + diastole.toString() + ';' +
                heartRate.toString());
            alert('Ihre Werte wurden gespeichert');
        }
    }
}
