import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {LogInCheck} from '../../global-files/function/LogInCheck';
import {MessageCounter} from '../../global-files/function/MessageCounter';
import {ThreeDaysList} from './functions/ThreeDaysList';
import {StatusCheck} from './functions/StatusCheck';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-patient-view',
    templateUrl: './patient-view.component.html',
    styleUrls: ['./patient-view.component.scss']
})

export class PatientViewComponent implements OnInit {
    name;
    status;
    messageCounter;
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
        LogInCheck('patient');
        this.name = localStorage.getItem('firstName');
        this.messageCounter = MessageCounter('Message');
        this.chartOptions.series[0].data = ThreeDaysList('systole');
        this.chartOptions.series[1].data = ThreeDaysList('diastole');
        this.chartOptions.series[2].data = ThreeDaysList('heartbeat');
        this.status = StatusCheck();
    }
}
