import {Component, OnInit, ViewChild} from '@angular/core';
import { USERS } from '../mock-files/mock-user';
import { MESSAGES } from '../mock-files/mock-messages';
import { DATES } from '../mock-files/mock-vital-parameter';
import { VitalParameter } from '../mock-files/vital-parameter';
import * as Highcharts from 'highcharts';

let user = [];
let systoleValues = [];
let diastoleValues = [];
let heartRateValues = [];

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
        lang: {
            noData: 'Keine Werte in den letzten 3 Tagen'
        },
        noData: {
            style: {
                fontWeight: 'bold',
                fontSize: '15px',
                color: '#B2101D'
            }
        },
        series: [{
            data: [],
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
                data: [],
                name: 'Diastole (mmHg)',
                color: '#0406FF',
                zIndex: 2,
                fillOpacity: 1,
                fillColor: '#FFFFFF',
            },
            {
                data: [],
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
            if (value.svTo.toString() === user[0] && value.svFrom.toString() === user[4]
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
            if (value.sv.toString() === user[0]) {
                if (value.timestamp > Date.now() - 345600001) { // letzten 3 Tage
                    systoleValues.unshift([value.timestamp + 3600000, value.systole]);
                    diastoleValues.unshift([value.timestamp + 3600000, value.diastole]);
                    heartRateValues.unshift([value.timestamp + 3600000, value.heartbeat]);
                }
            }
        });

        this.chartOptions.series[0].data = systoleValues;
        this.chartOptions.series[1].data = diastoleValues;
        this.chartOptions.series[2].data = heartRateValues;

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
        console.log(this.chartOptions.series[0].data);
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
            systoleValues.unshift([timestamp + 3600000, systole]);
            diastoleValues.unshift([timestamp + 3600000, diastole]);
            heartRateValues.unshift([timestamp + 3600000, heartRate]);
            this.chartOptions.series[0].data = systoleValues;
            this.chartOptions.series[1].data = diastoleValues;
            this.chartOptions.series[2].data = heartRateValues;
        }
    }

    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
