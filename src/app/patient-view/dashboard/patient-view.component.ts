import {Component, OnInit, ViewChild} from '@angular/core';
import { DATES } from '../../mock-files/mock-vital-parameter';
import { VitalParameter } from '../../mock-files/vital-parameter';
import * as Highcharts from 'highcharts';
import {LogInCheck} from '../../global-funtions/LogInCheck';
import {MessageCounter} from '../../global-funtions/MessageCounter';
import {ThreeDaysList} from './functions/ThreeDaysList';
import {StatusCheck} from './functions/StatusCheck';

let user = [];
const systoleValues = [];
const diastoleValues = [];
const heartRateValues = [];


@Component({
    selector: 'app-patient-view',
    templateUrl: './patient-view.component.html',
    styleUrls: ['./patient-view.component.scss']
})

export class PatientViewComponent implements OnInit {
    name;
    status;
    messageCounter;
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
        legend: {
            enabled: false
        },
        tooltip: {
            headerFormat: '',
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
            title: {
                text: null
            }
        }]
    };

    constructor() {}

    ngOnInit() {
        user = document.cookie.split(',');
        LogInCheck('patient');
        this.name = user[2];
        this.messageCounter = MessageCounter('Message');
        this.chartOptions.series[0].data = ThreeDaysList('systole');
        this.chartOptions.series[1].data = ThreeDaysList('diastole');
        this.chartOptions.series[2].data = ThreeDaysList('heartbeat');
        this.status = StatusCheck();
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
            alert('Ihre Werte wurden gespeichert');
            this.ngOnInit();
        }
    }
    onOff(): void {
        document.cookie = 'null; path=/';
        console.log(document.cookie);
    }
}
