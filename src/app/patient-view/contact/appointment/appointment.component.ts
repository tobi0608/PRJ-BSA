import {Component, OnInit, ViewChild} from '@angular/core';
import {Message} from '../../../mock-files/messages';
import {MESSAGES} from '../../../mock-files/mock-messages';
import {LogInCheck} from '../../../global-files/function/LogInCheck';
import {GetOpenHours} from '../../../global-files/function/GetOpenHours';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
    @ViewChild('appointmentForm') appointmentForm;
    time;
    date;
    type;
    openhours;

    constructor() {
    }

    ngOnInit() {
        LogInCheck('patient');
        this.openhours = GetOpenHours('patient');
    }

    onSend(): void {
        if (this.appointmentForm.form.valid) {
            const sv = localStorage.getItem('sv');
            const firstName = localStorage.getItem('firstName');
            const lastName = localStorage.getItem('firstName');
            const docSV = localStorage.getItem('DocSV');
            const tmp: Message = {
                svFrom: parseInt(sv, 10),
                svTo: parseInt(docSV, 10),
                first_name: firstName,
                last_name: lastName,
                type: 'Termin',
                text: 'Termin für ' + this.type + ' am ' + this.date + ' - ' + ' um ' + this.time,
                timestamp: Date.now(),
                seen: 'bell',
                check: 'check',
                times: 'times',
                info: ''
            };
            MESSAGES.unshift(tmp);
            alert('Ihr Terminvorschlag wurde abgeschickt und wird demnächst bearbeitet!');
        }
    }

}
