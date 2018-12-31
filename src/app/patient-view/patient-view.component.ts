import {Component, OnInit, ViewChild} from '@angular/core';
import { USERS } from '../mock-files/mock-user';
import { MESSAGES } from '../mock-files/mock-messages';
import { DATES } from '../mock-files/mock-vital-parameter';
import { VitalParameter } from '../mock-files/vital-parameter';
import * as Highcharts from 'highcharts';

let systoleValues = [];
let diastoleValues = [];
let heartRateValues = [];

let user = document.cookie.split(',');
DATES.find(function (value) {
    if (value.sv.toString() === user[0]) {
        if (value.timestamp < Date.now() - 345600001) { // letzten 3 Tage
            if (systoleValues.length === 0) {
                console.log('no values the last 3 days');
                document.getElementById('noValues').style.display = 'block';
            }
            return true;
        } else {
            systoleValues.unshift([value.timestamp + 3600000, value.systole]);
            diastoleValues.unshift([value.timestamp + 3600000, value.diastole]);
            heartRateValues.unshift([value.timestamp + 3600000, value.heartbeat]);
        }
    }
});

@Component({
    selector: 'app-patient-view',
    templateUrl: './patient-view.component.html',
    styleUrls: ['./patient-view.component.scss']
})

export class PatientViewComponent implements OnInit {
    name;
    stat;
    @ViewChild('systole') systole;
    @ViewChild('diastole') diastole;
    @ViewChild('heartRate') heartRate;

    Highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: 'area'
        },
        title: {
            text: null
        },
        series: [{
            data: systoleValues,
            name: 'Systole (mmHg)',
            color: '#0406FF',
            fillColor: '#41ACFF',
            zIndex: 1,
            zones: [
                {
                    value: 69,
                    color: '#FF0000',
                    fillColor: '#FF0000'
                },
                {
                    value: 141,
                },
                {
                    value: 300,
                    color: '#FF0000',
                    fillColor: '#FF0000',
                }]
        },
            {
                data: diastoleValues,
                name: 'Diastole (mmHg)',
                color: '#0406FF',
                zIndex: 2,
                fillOpacity: 1,
                fillColor: '#FFFFFF',
            },
            {
                data: heartRateValues,
                name: 'Herzrate (Pro S)',
                color: '#FF0015',
                zIndex: 3,
                fillOpacity: 0
            }
        ],
        tooltip: {
            shared: true,
            crosshairs: true
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                hour: '%H:%M',
                day: '%e. %b',
                week: '%e. %b',
                month: '%b \'%y',
                year: '%Y'
            }
        },
        yAxis: [{
            max: 250,
            min: 60,
            title: {
                text: null
            }
        }]
    };

    constructor() {}

    ngOnInit() {
        user = document.cookie.split(',');
        console.log(user);

        USERS.find(function (tmp) {
            if (tmp.sv.toString() === user[0] && tmp.type === 'patient') {
                return true;
            } else {
                document.getElementById('loginSite').style.display = 'none';
                document.getElementById('noAccess').style.display = 'block';
            }
        });
        let countMessage = 0;
        MESSAGES.forEach(function (value) {
            if (value.sv.toString() === document.cookie && value.sv_doc.toString() === user[4] && value.from === 'Doc'
                && value.seen === 'bell') {
                countMessage++;
            }
            if (countMessage === 1 ) {
                document.getElementById('alertCounter').innerText = countMessage.toString() + ' neue Nachricht';
            } else if (countMessage > 1 ) {
                document.getElementById('alertCounter').innerText = countMessage.toString() + ' neue Nachrichten';
            } else {
                document.getElementById('alertCounter').innerText = 'keine neue Nachricht';
            }
        });

        systoleValues = [];
        diastoleValues = [];
        heartRateValues = [];
        DATES.forEach(function (value) {
            systoleValues.unshift([value.timestamp + 3600000, value.systole]);
            diastoleValues.unshift([value.timestamp + 3600000, value.diastole]);
            heartRateValues.unshift([value.timestamp + 3600000, value.heartbeat]);
        });

        if (DATES[0].systole <= 140 && DATES[1].systole <= 140 && DATES[2].systole <= 140) {
            this.stat = 'check-circle';
        } else if (DATES[0].systole <= 140 && DATES[1].systole <= 140) {
            this.stat = 'exclamation-circle';
        } else if (DATES[1].systole <= 140 && DATES[2].systole <= 140) {
            this.stat = 'exclamation-circle';
        } else if (DATES[0].systole <= 140 && DATES[2].systole <= 140) {
            this.stat = 'exclamation-circle';
        } else {
            this.stat = 'times-circle';
        }

        this.name = user[2];
    }

    onSend(): void {
        const timestamp = Date.now();
        const sv = parseInt(user[0], 10);
        const systole = parseInt(this.systole.nativeElement.value, 10);
        const diastole = parseInt(this.diastole.nativeElement.value, 10);
        const heartRate = parseInt(this.heartRate.nativeElement.value, 10);
        let iTen = ' ';
        if (systole > 140) {
            iTen = 'heart';
        }
        const tmp: VitalParameter = {
            sv: sv,
            systole: systole,
            diastole: diastole,
            heartbeat: heartRate,
            timestamp: timestamp,
            i10: iTen
        };
        if (systole && diastole && heartRate !== null) {
            DATES.unshift(tmp);
        }
    }

    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
